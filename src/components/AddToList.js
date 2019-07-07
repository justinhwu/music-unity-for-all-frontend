import React from 'react'
import { Checkbox, Button, Header, Icon, Modal, Form, Input, TextArea, Label } from 'semantic-ui-react'
import {connect} from 'react-redux'

class AddToList extends React.Component{

  constructor(){
    super()
    this.state = {
      name: '',
      description: '',
      genre: '',
      image: '',
      display: false,
      selected: []
    }
  }

  createButton = () => {
    return(
    <Button animated='fade' floated='left' size='large' onClick={() => this.handleClick()}>
      <Button.Content visible>
        <Icon name='plus' />
      </Button.Content>
      <Button.Content hidden>Add to a List</Button.Content>
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
    const {videoId, title, publishedAt, channelTitle, description } = this.props.selection
    fetch(`http://localhost:3000/addsong`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        playlist_ids: this.state.selected,
        videoId: videoId,
        title: title,
        publishedAt: publishedAt,
        channelTitle: channelTitle,
        description: description
      })
    })
    .then(resp => resp.json())
    .then(songObj => {
      this.props.addSong(songObj, this.state.selected)
    })
  }

  handleSelect = (event) => {
    this.setState({
      selected: [...this.state.selected, event.currentTarget.parentElement.id]
    })
  }

  render(){
    return(
      <Modal trigger={this.createButton()} closeIcon onClose={() => this.handleClick()} open={this.state.display}>
        <Header icon='clipboard list' content='Add to a List' />
          <Modal.Content>
            <Form onSubmit={(event) => this.handleSubmit(event)}>
              <Form.Group widths='equal'>
              {this.props.lists.map((list)=>{
                return(
                <Form.Field id={list.id}>
                  <Checkbox value={list.id} label={list.name} onClick={(event)=> this.handleSelect(event)}/>
                </Form.Field>
              )
              })}
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
    addSong: (song, playlist_ids) => dispatch({type: 'ADD_SONG', song: song, playlist_ids: playlist_ids})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToList)
