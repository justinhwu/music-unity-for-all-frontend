import searchYoutube from 'youtube-api-v3-search';
import React from 'react'
import { Grid, Form, Input, Button, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
const API_KEY = 'AIzaSyATmQ8K3LV21JRsFhQ-ZRkPFQS5m4eheEE'

class SearchBar extends React.Component{

  constructor(){
    super()
    this.state={
      searchTerm: ''
    }
  }


  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true });
        });
      });
    };

    document.body.appendChild(script);
  }

  handleSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    const options = {
      part: 'snippet',
      type: 'video',
      maxResults: 10,
      videoCategoryId: 10,
      q: `${this.state.searchTerm}`
    }

    if(event.key === 'Enter' || event.type=== 'submit'){
      let searchTerm = this.state.searchTerm.replace(/\s/g, '+')
      // searchYoutube(`${API_KEY}`, options, (error, result) => {
      // this.props.results(result.items)
      fetch(`https://api.mixcloud.com/search/?amp=&limit=10&offset=10&q=${searchTerm}&type=cloudcast`
      )
      .then(resp => resp.json())
      .then(obj => {
        debugger
        this.props.mixcloudResults(obj.data)
      })
      // })
      }

    }


  render() {
    return (
      <Grid>
        <Grid.Column >
         <Form onSubmit={(event)=>this.handleSubmit(event)} onKeyDown={(event)=>this.handleSubmit(event)} size='large'>
           <Input placeholder='Search...' onChange={(event)=>this.handleSearchTerm(event)} size='small' style={{width: "750px", display:'center aligned grid'}}/>
           <Button><Icon name='search'/></Button>
         </Form>
        </Grid.Column>
      </Grid>
    )
  }

}

const mapDispatchtoProps = (dispatch) => {
  return{
    results: (searchResults) => dispatch({type: 'RETURN_RESULTS', payload: searchResults}),
    mixcloudResults: (mixcloud) => dispatch({type: 'RETURN_MIXCLOUD', payload: mixcloud})
  }
}


export default connect(null, mapDispatchtoProps)(SearchBar)
