import React from 'react'
import {connect} from 'react-redux'
import YoutubeCard from '../components/YoutubeCard'
import MixcloudCard from '../components/MixcloudCard'
import { Button, Segment, Card, Image, Icon, Grid} from 'semantic-ui-react'
import {Link, Redirect, withRouter} from "react-router-dom";
import DeleteModal from '../modals/DeleteModal'
import EditModal from '../modals/EditModal'

class ListPage extends React.Component{

  state = {changed: false}

  handleRemove = (song) => {
    fetch('http://localhost:3000/removesong', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        playlist_ids: this.props.selectedList.id,
        song_id: song.id,
        user_id: this.props.user.id
      })
    })
    .then(resp => resp.json())
    .then(playlists => {
      this.props.removeSong(playlists, song.id)
      this.setState({
        changed: true
      })
    })
  }

  handleDelete = () =>{
    fetch(`http://localhost:3000/playlists/${this.props.selectedList.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: this.props.selectedList.id,
        user_id: this.props.user.id
      })
    })
    .then(resp => resp.json())
    .then(playlists => {
      this.props.deletePlaylist(playlists)
      this.props.history.push('/mylists')
    })

  }

  render(){
    return(
    <div>
      <Button floated='left' as={Link} to='/mylists'>Go Back</Button>
          <Button animated='fade' floated='right' size='large' as={Link} to='/discover'>
            <Button.Content visible>
              <Icon name='plus' />
            </Button.Content>
            <Button.Content hidden>Add a Song</Button.Content>
          </Button>
        <EditModal list={this.props.selectedList}/>
        <DeleteModal handleDelete={this.handleDelete}/>


        <Card centered>
          <Image centered size='medium' src={this.props.selectedList.image? this.props.selectedList.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZPd4618kfPOrzfH2Vcmyf6wHO1zpE9IUNkH7xpGuRsn07ytR'} />
          <Card.Content>
            <Card.Header as='h2' textAlign='center'>{this.props.selectedList.name}</Card.Header>
            <Card.Description>{this.props.selectedList.description}</Card.Description>
          </Card.Content>
        </Card>
        <Segment>
        <Grid columns='two' divided>
          <Grid.Column>
            <h1> Your Added Youtube Videos</h1>
          <Segment>
          <Grid.Row>
              {this.props.selectedList.songs.length === 0? <h3> No Youtube Videos to Display!</h3>:
                this.props.selectedList.songs((result, index)=>(
                <YoutubeCard key={index} result={result} show={true} />
              ))
              }
          </Grid.Row>
          </Segment>
        </Grid.Column>
          <Grid.Column>
            <h1>Your Added Mixcloud Sets</h1>
          <Segment>
          <Grid.Row>
            { this.props.selectedList.mixclouds.length === 0? <h3> No Mixcloud Sets to Display!</h3>:
              this.props.selectedList.mixclouds.map((result, index)=>(
              <MixcloudCard key={index} mixcloudresults={result} show={true} />
            ))
            }
          </Grid.Row>
          </Segment>
        </Grid.Column>
        </Grid>
        </Segment>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    selectedList: state.selectedList,
    user: state.user
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
  removeSong: (playlists, song) => dispatch({type:'REMOVE_SONG', playlists: playlists, song: song}),
  deletePlaylist: (playlists) => dispatch({type:'DELETE_PLAYLIST', playlists: playlists})
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(ListPage))
