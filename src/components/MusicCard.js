import React from 'react'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import YouTube from 'react-youtube';
import Iframe from 'react-iframe'
class MusicCard extends React.Component {

  //  constructor(){
  //    super()
  //    this.state = {
  //      videoId: ''
  //    }
  //  }
  //
  //  componentDidMount(){
  //    this.setState({
  //      videoId: this.props.result.id.videoId
  //    })
  //    console.log(this.props.result.id.videoId)
  //  }
  //
  // componentWillUnmount(){
  //   console.log('deleting card')
  //   document.getElementById(this.props.result.id.videoId).remove()
  // }

  render(){
  return(
    <Segment>
    <Card.Group>
    <Card>
      <Iframe
        className='video'
        width="350"
        height="350"
        src={`https://www.youtube.com/embed/${this.props.result.id.videoId}`}
        id={this.props.result.id.videoId}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </Card>
    <Card id={`card-${this.props.result.id.videoId}`}>
      <Card.Content>
          <Card.Header>{this.props.result.snippet.title}</Card.Header>
          <Card.Meta>
            <span className='date'>Published: {this.props.result.snippet.publishedAt}</span>
          </Card.Meta>
          <Card.Description>
          <b>Artist(s):</b> {this.props.result.snippet.channelTitle} <br></br>
          </Card.Description>
      </Card.Content>
        <Card.Content extra>
          Link:
        </Card.Content>
      </Card>
    </Card.Group>
    </Segment>
    )
  }
}

// <YouTube
//   videoId={this.props.result.id.videoId}
//   opts={opts}
//   id={this.props.result.id.videoId}
//   className={this.props.result.id.videoId}
// />

// <Image src='https://upload.wikimedia.org/wikipedia/en/b/bf/Gold_Stupid_Love_Excision_Illenium_Cover.jpeg' wrapped ui={false} />

export default MusicCard
