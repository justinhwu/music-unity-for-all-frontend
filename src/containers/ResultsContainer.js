import React from 'react'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import MusicCard from '../components/MusicCard'
class ResultsContainer extends React.Component{


  render(){
    return(
      <Grid>
         <Grid.Column width={6}>
            { this.props.results.length === 0? <h3> No Results to Display!</h3>:
              this.props.results.map((result, index)=>(
            <Grid.Row>
              <MusicCard result={result} key={result.id.videoId}/>
            </Grid.Row>
            ))
            }
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
