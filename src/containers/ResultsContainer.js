import React from 'react'
import {Grid, Segment, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import YoutubeCard from '../components/YoutubeCard'
import MixcloudCard from '../components/MixcloudCard'
class ResultsContainer extends React.Component{


  render(){
    return(
      <Grid columns='two' divided textAlign='center'>
        <Grid.Column textAlign='center'>
          <h1> YouTube Results</h1>
        <Segment className='ui compact segment' textAlign='center'>
        <Grid.Row textAlign='center'>
            { this.props.results.length === 0? <Header as='h3' textAlign='center'> No Youtube Results to Display!</Header>:
              this.props.results.map((result, index)=>(
              <YoutubeCard key={index} result={result} show={false} />
            ))
            }
        </Grid.Row>
        </Segment>
      </Grid.Column>
        <Grid.Column textAlign='center'>
          <h1>MixCloud Results</h1>
        <Segment className='ui compact segment' textAlign='center'>
        <Grid.Row textAlign='center'>
          { this.props.mixcloud.length === 0? <h3> No Mixcloud Results to Display!</h3>:
            this.props.mixcloud.map((result, index)=>(
            <MixcloudCard key={index} mixcloudresults={result} show={false} />
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
    results: state.youtubeResults,
    mixcloud: state.mixcloudResults
  })
}


export default connect(mapStateToProps)(ResultsContainer)
