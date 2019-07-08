import React from 'react'
import Trending from '../components/Trending'
import { Segment, Header, Icon } from 'semantic-ui-react'

class HomePage extends React.Component{

  render(){
    return(
      <Segment>
        <Header as='h2' icon>
         <Icon name='hotjar' />
         Most Popular Music Videos on Youtube
       </Header>
      </Segment>
    )
  }

}
// <Trending />

export default HomePage
