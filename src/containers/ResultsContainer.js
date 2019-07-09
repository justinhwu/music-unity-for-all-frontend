import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'
import YoutubeCard from '../components/YoutubeCard'
class ResultsContainer extends React.Component{


  render(){
    return(
      <Grid columns='two' divided>
        <Grid.Column>
          <h1> YouTube Results</h1>
        <Segment>
        <Grid.Row>
            { this.props.results.length === 0? <h3> No Results to Display!</h3>:
              this.props.results.map((result, index)=>(
              <YoutubeCard key={index} result={result} show={false} />
            ))
            }
        </Grid.Row>
        </Segment>
      </Grid.Column>
        <Grid.Column>
          <h1>MixCloud Results</h1>
        <Segment>
        <Grid.Row>
          { this.props.results.length === 0? <h3> No Results to Display!</h3>:
            this.props.results.map((result, index)=>(
            <YoutubeCard key={index} result={result} show={false} />
          ))
          }

        </Grid.Row>
        </Segment>
      </Grid.Column>
      </Grid>
    )
  }

}

const mapStateToProps = (state) => {
  return({
    results: state.youtubeResults
  })
}


export default connect(mapStateToProps)(ResultsContainer)
