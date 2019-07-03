import React from 'react'
import { Button, Header, Icon, Modal, Form, Input, TextArea, Label } from 'semantic-ui-react'
import {connect} from 'react-redux'

class CreateListForm extends React.Component{

  constructor(){
    super()
    this.state = {
      name: '',
      description: '',
      genre: '',
      image: ''
    }
  }

  createButton = () => {
    return(
    <Button animated='fade' floated='right' size='large' >
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

  handleSubmit = (event) => {
    debugger
  }

  render(){
    return(
      <Modal trigger={this.createButton()} closeIcon>
        <Header icon='list alternate outline' content='Create a New List' />
          <Modal.Content>
            <Form onSubmit={(event) => this.handleSubmit(event)}>
              <Form.Group widths='equal'>
                <Form.Input value={this.state.name} placeholder='List Name' type='text' label='List Name' name='name' onChange={(event)=>this.handleChange(event)}/>
                <Form.Input value={this.state.image} placeholder='Image' type='text' label='Image' name='image'  onChange={(event)=>this.handleChange(event)}/>
                <Form.Input value={this.state.genre} placeholder='Genre' type='text' label='Genre' name='genre'  onChange={(event)=>this.handleChange(event)}/>
              </Form.Group>
              <Form.Group widths='equal'>
                <TextArea value={this.state.description} name='description' label='Description' placeholder='Description'  onChange={(event)=>this.handleChange(event)}/>
              </Form.Group>
                <Button color='green'>
                  <Icon name='checkmark' /> Create List
                </Button>
          </Form>
            <Button color='red'>
              <Icon name='remove' /> Cancel
            </Button>
        </Modal.Content>
    </Modal>
    )
  }

}

const mapStateToProps = (state) =>{

}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListForm)
