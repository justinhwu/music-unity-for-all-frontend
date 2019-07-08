import React from 'react'
import {connect} from 'react-redux'
import YoutubeCard from '../components/YoutubeCard'
import { Button, Segment, Card, Image} from 'semantic-ui-react'
import {Link} from "react-router-dom";


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

  render(){
    return(
    <div>
      <Button floated='left' as={Link} to='/mylists'>Go Back</Button>
      <Button floated='right' as={Link} to='/discover'>Add a Song</Button>
        <Card centered>
          <Image centered size='medium' src={this.props.selectedList.image? this.props.selectedList.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZPd4618kfPOrzfH2Vcmyf6wHO1zpE9IUNkH7xpGuRsn07ytR'} />
          <Card.Content>
            <Card.Header as='h2' textAlign='center'>{this.props.selectedList.name}</Card.Header>
            <Card.Description>{this.props.selectedList.description}</Card.Description>
          </Card.Content>
        </Card>
      <Segment>

            {this.props.selectedList.songs.length!== 0? this.props.selectedList.songs.map((song, index)=>(
              <YoutubeCard handleRemove={this.handleRemove} key={index+1} result={song} show={true}/>
            )):
            <div>
              <h2>This list is empty!</h2>
            </div>}
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
  removeSong: (playlists, song) => dispatch({type:'REMOVE_SONG', playlists: playlists, song: song})
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ListPage)
