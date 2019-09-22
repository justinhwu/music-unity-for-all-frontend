
import React from 'react'
import { Menu, Container, Image} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'


class NavBar extends React.Component{

  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }

  handleLogOut = () => {
    this.props.logout()
    localStorage.removeItem("token")
    setTimeout(alert('Logging Out!'), 1500)
  }

  render(){
    const { activeItem } = this.state
    return(
          <Menu pointing color='blue' inverted>
            <Menu.Menu>
            <Menu.Item
              as={Link} to='/home'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              icon='home'
              labelPosition='left'
              />
            <Menu.Item
              as={Link} to='/mylists'
              name='mylists'
              active={activeItem === 'mylists'}
              onClick={this.handleItemClick}
              icon='list layout'
              labelPostion='left'
              />
            <Menu.Item
              as={Link} to='/discover'
              name='discover'
              active={activeItem === 'discover'}
              onClick={this.handleItemClick}
              icon='search'
              labelPostion='left'
            />
            <Menu.Item
                as={Link} to='/songs'
                name='songs'
                active={activeItem === 'songs'}
                onClick={this.handleItemClick}
              />
          </Menu.Menu>

          <Image src='/logo_transparent.png' centered size='tiny'/>

          <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem==='logout'}
            onClick={() => this.handleLogOut()}
            icon='log out'
            labelPosition='left'
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
    logout: () => dispatch({type: 'LOGOUT'})
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(NavBar)
