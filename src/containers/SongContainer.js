import React from 'react'
import { Card } from 'semantic-ui-react'
import ListCard from '../components/ListCard'
import {connect} from 'react-redux'
import { Button, Segment, Image, Icon, Grid} from 'semantic-ui-react'
import YoutubeCarousel from '../components/YoutubeCarousel'
import MixcloudCarousel from '../components/MixcloudCarousel'
class SongContainer extends React.Component{

  state={didLoad: false}

  componentDidMount(){
    fetch(`http://localhost:3000/getSongs/${this.props.user.id}`)
    .then(resp => resp.json())
    .then(obj => {
      this.props.allSets(obj.mixclouds)
      this.props.allSongs(obj.songs)
    })
  }


  render(){
    return(
      <Segment>
        {this.state.didLoad?
          <div>
            <MixcloudCarousel isyoutube={true} home={false}/>
            <YoutubeCarousel isyoutube={false} home={false}/>
          </div>:
          null
        }
      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    lists: state.lists
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
    allSongs: (songs) => dispatch({type:'GET_SONGS', songs: songs}),
    allSets: (sets) => dispatch({type:'GET_SETS', sets: sets})
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(SongContainer)
