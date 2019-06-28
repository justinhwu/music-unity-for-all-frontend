import React from 'react';
import Login from './components/Login'
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import PageContainer from './containers/PageContainer'
class App extends React.Component{

  state = {displayLogin: false}

  handleDisplay = () => {
    this.setState({
      displayLogin: !this.state.displayLogin
    })
  }

  render(){
    return (
      <Router>
        <PageContainer />
      </Router>
    );
  }
}
// {this.state.displayLogin? <PageContainer />: <Route path='/' render={()=> <Login handleDisplay={this.handleDisplay}/>}/> }

export default App;
