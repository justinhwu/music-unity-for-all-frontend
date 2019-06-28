import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from '../containers/NavBar'
import ListContainer from '../containers/ListContainer'
import Discover from './Discover'
import HomePage from './HomePage'

class PageContainer extends React.Component{


  render(){
    return (
      <Router>
        <NavBar />
        <Route path='/mylists' component={ListContainer}/>
        <Route path='/discover' component={Discover}/>
        <Route path='/home' component={HomePage}/>
      </Router>
    );
  }
}

export default PageContainer;
