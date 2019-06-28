import React from 'react'
import { Search, Grid} from 'semantic-ui-react'


class SearchBar extends React.Component{

  constructor(){
    super()
    this.state = {
      results: [],
      searchTerm: '',
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {

    return (
      <Grid>
        <Grid.Column >
          <Search
            onResultSelect={console.log('Selected Result')}
            onSearchChange={(event)=> this.handleSearch(event)}
            results={this.state.results}
            value={this.state.searchTerm}
          />
        </Grid.Column>
      </Grid>
    )
  }

}

export default SearchBar
