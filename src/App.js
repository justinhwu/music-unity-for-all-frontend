import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Login from './components/Login'
import {connect} from 'react-redux'
import ListContainer from './containers/ListContainer'
import Discover from './containers/Discover'
import HomePage from './containers/HomePage'
import NavBar from './containers/NavBar'
import ListPage from './containers/ListPage'

class App extends React.Component{

  state = {displayLogin: false}

  render(){
    return (
      <Router>
        {this.props.user.length !==0?
          (<div>
            <NavBar />
            <Route exact path='/mylists' component={ListContainer}/>
            <Route exact path='/discover' component={Discover}/>
            <Route exact path='/home' component={HomePage}/>
            <Route path='/mylists/:id' component={ListPage} />
          </div>
          ): <Redirect to='/'/>}
        <Route path='/' component={Login}/>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
