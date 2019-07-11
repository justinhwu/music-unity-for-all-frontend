import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { Redirect} from "react-router-dom";

class Login extends React.Component{

  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(resp => resp.json())
    .then(Obj => {
      if(Obj.error){
        alert(Obj.error)
      }
      else{
        this.props.sendUser(Obj)
        alert(`Welcome back ${Obj.name}!`)
        this.setState({
          redirect: !this.state.redirect
        })
      }
    })
  }

  render(){
    if(this.props.user.length !==0){
      return <Redirect to='/home'/>
    }
    return(
    <div style={{backgroundImage: `url(${"/logo_transparent.png"})`}}>
      <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src='/logo_transparent.png' inline height='250' width='250' centered verticalALign/>
          <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
          </Header>
          <Form size='large' onSubmit={(event) => this.handleSubmit(event)} onChange={(event) => this.handleChange(event)}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name='username'/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
              />

              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
    )
  }

}

const mapDispatchtoProps = (dispatch) => {
  return{
    sendUser: (userObj) => dispatch({type: 'LOGIN', payload: userObj})
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login)
