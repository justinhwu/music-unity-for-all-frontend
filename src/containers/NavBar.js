
import React from 'react'
import { Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";


class NavBar extends React.Component{

  state = { activeItem: window.location.href.split('/').pop() }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }


  render(){
    const { activeItem } = this.state
    return(
          <Menu pointing>
            <Menu.Item
              as={Link} to='/home'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              as={Link} to='/mylists'
              name='mylists'
              active={activeItem === 'mylists'}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              as={Link} to='/discover'
              name='discover'
              active={activeItem === 'discover'}
              onClick={this.handleItemClick}
            />
          <Menu.Menu position='right'>
          <Menu.Item
            name='profile'
            active={activeItem==='profile'}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            name='login'
            active={activeItem==='login'}
            onClick={this.handleItemClick}
            />
        </Menu.Menu>
          </Menu>
          )
  }
}

export default NavBar
