import React from 'react'
import { Card, Icon, Image, Segment, Grid, Menu} from 'semantic-ui-react'
import YouTube from 'react-youtube';
import Iframe from 'react-iframe'
import {Link} from "react-router-dom";
import AddToList from './AddToList'
class YoutubeCard extends React.Component {
  render(){
  const {videoId, title, publishedAt, channelTitle, description } = this.props.result

  return(
    <Card.Group>
      <Card>
        <Card.Content>
          <Iframe
            className='video'
            width="auto"
            height="auto"
            src={`https://www.youtube.com/embed/${videoId}`}
            id={videoId}
            allowFullScreen />
        </Card.Content>
      </Card>
      <Card id={`card-${videoId}`}>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
              <span className='date'>Published: {publishedAt}</span>
            </Card.Meta>
            <Card.Description>
            <b>Channel Title:</b> {channelTitle} <br></br>
            </Card.Description>
        </Card.Content>
          <Card.Content extra>
            <Menu>
              <Menu.Item href={`https://www.youtube.com/watch?v=${videoId}`} position="left"
              target="_blank">
                <Icon name='youtube'/>
              </Menu.Item>
              <Menu.Item>
                <AddToList />
              </Menu.Item>
            </Menu>
          </Card.Content>
        </Card>
    </Card.Group>

    )
  }
}

// <YouTube
//   videoId={videoId}
//   opts={opts}
//   id={videoId}
//   className={videoId}
// />

// <Image src='https://upload.wikimedia.org/wikipedia/en/b/bf/Gold_Stupid_Love_Excision_Illenium_Cover.jpeg' wrapped ui={false} />

export default YoutubeCard
