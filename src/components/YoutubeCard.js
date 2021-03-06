import React from 'react'
import { Card, Icon, Menu, Button, Embed, Popup} from 'semantic-ui-react'
import AddToList from './AddToList'
import {connect} from 'react-redux'
class YoutubeCard extends React.Component {

  render(){
  const {videoId, title, publishedAt, channelTitle, description, url} = this.props.result
  return(
      <Card id={`card-${videoId}`} raised className='item'>
        <Embed id={videoId} placeholder={url} source='youtube' />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
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
                {this.props.show ?
                <div>
                  <Button animated='fade' floated='right' size='large' onClick={() => this.props.handleRemove(this.props.result)}>
                    <Button.Content visible>
                      <Icon name='remove' />
                    </Button.Content>
                    <Button.Content hidden>Remove Song</Button.Content>
                  </Button>
                </div>
                :<AddToList show={this.props.show} selection={this.props.result}
                youtube={true}/>
                }
              </Menu.Item>
            </Menu>
          </Card.Content>
        </Card>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
// <Iframe
//   className='video'
//   width="auto"
//   height="auto"
//   src={`https://www.youtube.com/embed/${videoId}`}
//   id={videoId}
//   allowFullScreen />


export default connect(mapStateToProps)(YoutubeCard)
