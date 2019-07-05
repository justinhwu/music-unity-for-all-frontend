import React from 'react'
import { Button, Header, Icon, Modal, Form, Input, TextArea, Label } from 'semantic-ui-react'
import {connect} from 'react-redux'

class AddToList extends React.Component{

  constructor(){
    super()
    this.state = {
      name: '',
      description: '',
      genre: '',
      image: '',
      display: false
    }
  }

  createButton = () => {
    return(
    <Button animated='fade' floated='left' size='large' onClick={() => this.handleClick()}>
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
      display: !this.state.display
    })
  }

  handleSubmit = (event) => {
    debugger
  }

  render(){
    return(
      <Modal trigger={this.createButton()} closeIcon onClose={() => this.handleClick()} open={this.state.display}>
        <Header icon='clipboard list' content='Add to a List' />
          <Modal.Content>
            <Form onSubmit={(event) => this.handleSubmit(event)}>
              <Form.Group widths='equal'>
              {this.props.lists.map((list)=>(
                <Form.Checkbox id={list.id} label={list.name}/>
              ))}
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

const mapStateToProps = (state) => {
  return{
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addList: (list) => dispatch({type:'ADD_LIST', payload: list})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToList)
