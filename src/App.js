import React from 'react';
import Login from './components/Login'
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import NavBar from './containers/NavBar'
class App extends React.Component{

  state = {displayLogin: false}

  handleDisplay = () => {
    this.setState({
      displayLogin: true
    })
  }

  render(){
    return (
      <Router>
        {this.state.displayLogin? <NavBar/>: <Route path='/' render={()=> <Login handleDisplay={this.handleDisplay}/>}/> }





      </Router>
    );
  }
}

export default App;
