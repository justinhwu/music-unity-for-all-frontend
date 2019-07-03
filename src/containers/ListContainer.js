import React from 'react'
import { Button, Icon, Segment, Card } from 'semantic-ui-react'
import ListCard from '../components/ListCard'
import {connect} from 'react-redux'
class ListContainer extends React.Component{



  render(){
    return(
      <div>
        <div>
        <Button animated='fade' floated='right' size='large' onClick={()=> console.log('Hi')}>
          <Button.Content visible>
            <Icon name='plus' />
          </Button.Content>
          <Button.Content hidden>New List</Button.Content>
        </Button>
        </div>
        <Card.Group>
          <ListCard />
        </Card.Group>

      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  
})

const mapDispatchtoProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchtoProps)(ListContainer)
