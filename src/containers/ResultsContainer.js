import React from 'react'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import YoutubeCard from '../components/YoutubeCard'
class ResultsContainer extends React.Component{


  render(){
    return(
      <Grid>

            { this.props.results.length === 0? <h3> No Results to Display!</h3>:
              this.props.results.map((result, index)=>(
              <YoutubeCard key={index} result={result} />
            ))
            }

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
