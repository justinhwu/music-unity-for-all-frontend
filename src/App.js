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
import SongContainer from './containers/SongContainer'
import API_KEY from './API_key.js'

class App extends React.Component{

   componentDidMount(){
     let token = localStorage.getItem("token")
      if(token){
        fetch("http://localhost:3000/api/v1/home", {
          headers: {
            "Authentication" : `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => {
          this.props.userLogin(data)
        })
      }
      /*
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=10&key=${API_KEY}`)
    .then(resp => resp.json())
    .then(songs => {
      songs.items = songs.items.map((item)=> {
            const {id, snippet: {title, publishedAt, channelTitle, description, thumbnails: {default: {url}}}} = item
            let new_hash = {videoId: id, title: title, publishedAt: publishedAt, channelTitle: channelTitle, description: description, url: url}
            return new_hash
          })
      this.props.trendingVideos(songs.items)
    })
    */
  }

  showLogin = () => {
    let token = localStorage.getItem("token")
    return token? <Redirect to="/home" /> :
    <Login />
  }

  render(){
    let token = localStorage.getItem("token")
    return (
      <Router>
        {token ?
          (<div>
            <NavBar />
            <Route exact path='/songs' component={SongContainer}/>
            <Route exact path='/mylists' component={ListContainer}/>
            <Route exact path='/discover' component={Discover}/>
            <Route exact path='/home' component={HomePage}/>
            <Route path='/mylists/:id' component={ListPage} />
          </div>
          ): <Redirect to='/'/>}
        <Route path='/' render={this.showLogin}/>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    token: state.tokenStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    trendingVideos: (videos) => dispatch({
      type: 'GET_TRENDING', payload: videos
    }),
    userLogin: (user) => dispatch({
      type: 'LOGIN', payload: user
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
