import React from 'react'
import {Grid, Segment, Icon, Card, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import YoutubeCard from '../components/YoutubeCard'
import MixcloudCard from '../components/MixcloudCard'
class ResultsContainer extends React.Component{


  render(){
    return(
      <Grid columns='two' divided textAlign='center' verticalAlign>
        <Grid.Column textAlign='center' verticalAlign>
          <Icon name='youtube play' size='massive'/>
            {this.props.results.length ===0? <Header as='h3' textAlign='center'> No Youtube Results to Display!</Header>: null}
            <Card.Group>
            { this.props.results.length === 0? null :
              this.props.results.map((result, index)=>(
              <YoutubeCard key={index} result={result} show={false} />
            ))
            }
          </Card.Group>
      </Grid.Column>
        <Grid.Column textAlign='center' verticalAlign>
          <Icon name='mixcloud' size='massive'/>
          {this.props.mixcloud.length ===0? <Header as='h3' textAlign='center'> No Mixcloud Results to Display!</Header>: null}
          <Card.Group>
          { this.props.mixcloud.length === 0? null :
            this.props.mixcloud.map((result, index)=>{
              return(
            <MixcloudCard key={index} mixcloudresults={result} show={false} />
            )
            })
          }
          </Card.Group>
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
