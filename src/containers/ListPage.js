import React from 'react'
import {connect} from 'react-redux'
import YoutubeCard from '../components/YoutubeCard'
import { Button, Icon, Segment, Card, Header, Image} from 'semantic-ui-react'
import {Link} from "react-router-dom";


class ListPage extends React.Component{

  render(){
    return(
      <div>
      <Button floated='left' as={Link} to='/mylists'>Go Back</Button>
        <Card centered>
          <Image centered size='medium' src={`${this.props.selectedList.image}`} />
          <Card.Content>
            <Card.Header as='h2' textAlign='center'>{this.props.selectedList.name}</Card.Header>
            <Card.Description>{this.props.selectedList.description}</Card.Description>
          </Card.Content>
        </Card>
        <Card.Group>
          <Card>
            <Card.Header>{this.props.selectedList.name}</Card.Header>
          </Card>
        </Card.Group>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    selectedList: state.selectedList
  }
}



export default connect(mapStateToProps)(ListPage)
