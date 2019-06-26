
import React from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'


class NavBar extends React.Component{

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render(){
    const { activeItem } = this.state
    return(
          <Menu pointing>
            <Menu.Item name='home' active={activeItem === 'home'} href='/Login' />
            <Menu.Item
              name='My Lists'
              active={activeItem === 'My Lists'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Discover'
              active={activeItem === 'Discover'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          )
  }
}

export default NavBar
