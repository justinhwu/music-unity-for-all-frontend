import React from 'react'
import { Card, Icon, Menu, Button, Embed, Popup} from 'semantic-ui-react'
import AddToList from './AddToList'
import {connect} from 'react-redux'
import MixCloudPlayer from 'react-player'
class MixcloudCard extends React.Component {

  render(){
  const {username , url, name, created_time} = this.props.mixcloudresults

  return(
    <Card className='item' raised >
       <div className='player-wrapper'>
        <MixCloudPlayer url={url} width='100%'
            height='100%'/>
      </div>
      <Card.Content>
          <Card.Header style={{margin: 'auto'}} textAlign='center'>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>Published: {created_time}</span>
          </Card.Meta>
          <Card.Description>
          <b>Channel Title:</b> {username} <br></br>
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Menu>
          <Menu.Item href={url} position="left"
          target="_blank">
            <Icon name='mixcloud'/>
          </Menu.Item>
          <Menu.Item>
            {this.props.show ?
            <div>
              <Button animated='fade' floated='right' size='large' onClick={() => this.props.handleRemove(this.props.mixcloudresults)}>
                <Button.Content visible>
                  <Icon name='remove' />
                </Button.Content>
                <Button.Content hidden>Remove Song</Button.Content>
              </Button>
            </div>
            :<AddToList show={this.props.show} selection={this.props.mixcloudresults} youtube={false}/>
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


export default connect(mapStateToProps)(MixcloudCard)
