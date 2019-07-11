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
    <div >
          <Header as='h2' icon style={{margin: 'auto'}}>
           <Icon name='hotjar' style={{margin: 'auto'}}/>
           Most Popular Music Videos on Youtube
         </Header>
      <Segment>
       <Trending isyoutube={true} home={true}/>
      </Segment>
  </div>
    )
  }

}



export default HomePage
