import React from 'react'
import Trending from '../components/Trending'
import { Segment, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
const API_KEY = 'AIzaSyATmQ8K3LV21JRsFhQ-ZRkPFQS5m4eheEE'

class HomePage extends React.Component{

  constructor(){
    super()
    this.state = {
      trendingVideos: [],
      display: false
    }
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=10&key=${API_KEY}`)
    .then(resp => resp.json())
    .then(songs => {
      songs.items = songs.items.map((item)=> {
            const {id, snippet: {title, publishedAt, channelTitle, description, thumbnails: {default: {url}}}} = item
            let new_hash = {videoId: id, title: title, publishedAt: publishedAt, channelTitle: channelTitle, description: description, url: url}
            return new_hash
          })
      this.props.trendingVideos(songs.items)
      this.setState({
        trendingVideos: songs.items,
        display: !this.state.display
      })
    })

  }

  render(){
    return(
      <Segment>
          <Header as='h2' icon>
           <Icon name='hotjar' />
           Most Popular Music Videos on Youtube
         </Header>
      <Segment>
       <Trending trendingVideos={this.state.trendingVideos}/>
      </Segment>
    </Segment>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    trendingVideos: (videos) => dispatch({
      type: 'GET_TRENDING', payload: videos
    })
  }
}


export default connect(null, mapDispatchToProps)(HomePage)
