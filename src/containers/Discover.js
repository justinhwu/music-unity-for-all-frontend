import React from 'react'
import SearchBar from './SearchBar'
import ResultsContainer from './ResultsContainer'
import { Segment } from 'semantic-ui-react'

class Discover extends React.Component{

  render(){
    return(
      <div>
        <Segment>
        <SearchBar />
        </Segment>
        <Segment>
        <ResultsContainer />
        </Segment>
      </div>
    )
  }

}

export default Discover
