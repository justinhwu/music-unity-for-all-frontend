import React from 'react'
import Trending from '../components/Trending'
import { Segment, Header, Icon } from 'semantic-ui-react'

class HomePage extends React.Component{

  render(){
    return(
      <Segment>
        <Header as='h2' icon>
         <Icon name='hotjar' />
         Account Settings
         <Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
       </Header>
        <Trending />
      </Segment>
    )
  }

}

export default HomePage
