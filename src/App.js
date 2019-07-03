import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import PageContainer from './containers/PageContainer'
import Login from './components/Login'
import {connect} from 'react-redux'
import ListContainer from './containers/ListContainer'
import Discover from './containers/Discover'
import HomePage from './containers/HomePage'
import NavBar from './containers/NavBar'

class App extends React.Component{

  state = {displayLogin: false}

  handleDisplay = (event) => {
    this.setState({
      displayLogin: !this.state.displayLogin
    })
  }

  render(){
    return (
      <Router>
        {this.state.displayLogin? <NavBar />: null}
        <Route exact path='/mylists' component={ListContainer}/>
        <Route exact path='/discover' component={Discover}/>
        <Route exact path='/home' component={HomePage}/>
        <Route path='/' render={()=> <Login handleDisplay={(event)=> this.handleDisplay(event)}/>}/>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps)(App)
