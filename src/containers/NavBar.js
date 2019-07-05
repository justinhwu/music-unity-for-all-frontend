
import React from 'react'
import { Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'


class NavBar extends React.Component{

  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }

  handleLogOut = () => {
    this.props.logout()
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
            name='logout'
            active={activeItem==='logout'}
            onClick={this.handleLogOut}
            />
        </Menu.Menu>
          </Menu>
          )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
    logout: () => dispatch({type: 'logout'})
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(NavBar)
