import searchYoutube from 'youtube-api-v3-search';
import React from 'react'
import { Grid, Form, Input} from 'semantic-ui-react'
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
      maxResults: 5,
      q: `${this.state.searchTerm}`
    }
    if(event.key === 'Enter'){
        searchYoutube(`${API_KEY}`, options, (error, result) => {
          this.props.results(result.items)
        }

      )}
    }


  render() {
    return (
      <Grid>
        <Grid.Column >
         <Form onKeyDown={(event)=>this.handleSubmit(event)} size='large'>
           <Input loading icon='user' placeholder='Search...' onChange={(event)=>this.handleSearchTerm(event)} size='small' style={{width: "750px", display:'center aligned grid'}}/>
         </Form>
        </Grid.Column>
      </Grid>
    )
  }

}

const mapDispatchtoProps = (dispatch) => {
  return{
    results: (searchResults) => dispatch({type: 'RETURN_RESULTS', payload: searchResults})
  }
}


export default connect(null, mapDispatchtoProps)(SearchBar)
