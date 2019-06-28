
import React from 'react'
import { Input, Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";


class NavBar extends React.Component{

  state = { activeItem: 'Home' }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }


  render(){
    const { activeItem } = this.state
    return(
          <Menu pointing>
            <Menu.Item
              as={Link} to='/home'
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
              href='/home'
              />
            <Menu.Item
              as={Link} to='/mylists'
              name='My Lists'
              active={activeItem === 'My Lists'}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              as={Link} to='/discover'
              name='Discover'
              active={activeItem === 'Discover'}
              onClick={this.handleItemClick}
              href='/discover'
            />
          <Menu.Menu position='right'>
          <Menu.Item
            name='Profile'
            active={activeItem==='Profile'}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            name='Login'
            active={activeItem==='Login'}
            onClick={this.handleItemClick}
            href='/login'
            />
        </Menu.Menu>
          </Menu>
          )
  }
}

export default NavBar
