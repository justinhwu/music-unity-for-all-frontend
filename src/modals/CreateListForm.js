import React from 'react'
import { Button, Header, Icon, Modal, Form, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'

class CreateListForm extends React.Component{

  constructor(){
    super()
    this.state = {
      name: '',
      description: null,
      genre: null,
      image: null,
      display: false
    }
  }

  createButton = () => {
    return(
    <Button animated='fade' floated='right' size='large' onClick={() => this.handleClick()}>
      <Button.Content visible>
        <Icon name='plus' />
      </Button.Content>
      <Button.Content hidden>New List</Button.Content>
    </Button>)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      name: '',
      description: null,
      genre: null,
      image: null,
      display: !this.state.display
    })
  }

  handleSubmit = (event) => {

    fetch('http://localhost:3000/playlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        genre: this.state.genre,
        image: this.state.image,
        user_id: this.props.user.id
      })
    })
    .then(resp => resp.json())
    .then(listObj => (this.props.addList(listObj)))
    this.handleClick()
    this.setState({
      name: '',
      description: null,
      genre: null,
      image: null
    })
  }

  render(){
    return(
      <Modal trigger={this.createButton()} closeIcon onClose={() => this.handleClick()} open={this.state.display}>
        <Header icon='list alternate outline' content='Create a New List' />
          <Modal.Content>

            {/*Form that allows user to create list*/}
            <Form onSubmit={(event) => this.handleSubmit(event)}>

              {/*List Name, Image, Genre Inputs*/}
              <Form.Group widths='equal'>
                <Form.Input value={this.state.name} placeholder='List Name' type='text' label='List Name' name='name' onChange={(event)=>this.handleChange(event)}
                  required />
                <Form.Input value={this.state.image} placeholder='Image' type='text' label='Image' name='image'  onChange={(event)=>this.handleChange(event)}/>
                <Form.Input value={this.state.genre} placeholder='Genre' type='text' label='Genre' name='genre'  onChange={(event)=>this.handleChange(event)}/>
              </Form.Group>

              {/*Text Field for the Description*/}
              <Form.Group widths='equal'>
                <TextArea value={this.state.description} name='description' label='Description' placeholder='Description'  onChange={(event)=>this.handleChange(event)}/>
              </Form.Group>

              {/*Create List Button*/}
              <Button color='green'>
                <Icon name='checkmark' /> Create List
              </Button>
          </Form>

            <Button color='red' onClick={() => this.handleClick()}>
              <Icon name='remove' /> Cancel
            </Button>
        </Modal.Content>
    </Modal>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addList: (list) => dispatch({type:'ADD_LIST', payload: list})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListForm)
