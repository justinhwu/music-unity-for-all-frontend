import React from 'react'
import Trending from '../components/Trending'
import { Segment, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
import searchYoutube from 'youtube-api-v3-search';
const API_KEY = 'AIzaSyATmQ8K3LV21JRsFhQ-ZRkPFQS5m4eheEE'

class HomePage extends React.Component{

  state={trending: []}

  componentDidMount(){
    const options = {
      part: 'snippet',
      type: 'video',
      chart: 'mostPopular',
      maxResults: 10,
      videoCategoryId: 10
    }
    searchYoutube(`${API_KEY}`, options, (error, result) => {
      this.props.trending(result.items)
    })

  }


  render(){
    return(
      <Segment>
        <Header as='h2' icon>
         <Icon name='hotjar' />
         Most Popular Music Videos on Youtube
       </Header>
       <Trending initial={this.state.trending}/>
      </Segment>
    )
  }

}

const mapDispatchtoProps = (dispatch) => {
  return{
    trending: (videos) => dispatch({
      type: 'GET_TRENDING', videos: videos
    })
  }
}

export default connect(null, mapDispatchtoProps)(HomePage)
