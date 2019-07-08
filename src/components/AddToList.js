import React from 'react'
import { Checkbox, Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
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
      <Button.Content hidden >Add to List</Button.Content>
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
    const {videoId, title, publishedAt, channelTitle, description, url} = this.props.selection
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
        description: description,
        url: url,
        user_id: this.props.user.id
      })
    })
    .then(resp => resp.json())
    .then(playlists => {
      this.props.addSong(playlists)
    })
    this.handleClick()
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
              {this.props.lists.map((list, index)=>{
                return(
                <Form.Field id={list.id} key={index}>
                  <Checkbox key={index} value={list.id} label={list.name} onClick={(event)=> this.handleSelect(event)}/>
                </Form.Field>
              )
              })}
              </Form.Group>
              <Button color='green'>
                <Icon name='checkmark' /> Add to List
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
    lists: state.lists,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addSong: (playlists) => dispatch({type: 'ADD_SONG', playlists: playlists})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToList)
