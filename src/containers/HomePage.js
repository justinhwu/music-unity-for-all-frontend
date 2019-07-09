import React from 'react'
import Trending from '../components/Trending'
import { Segment, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'

class HomePage extends React.Component{

  constructor(){
    super()
    this.state = {
      trendingVideos: [],
      display: false
    }
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



export default HomePage
