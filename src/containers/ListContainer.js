import React from 'react'
import { Button, Icon, Segment, Card, Modal } from 'semantic-ui-react'
import ListCard from '../components/ListCard'
import {connect} from 'react-redux'
import CreateListForm from '../components/CreateListForm'

class ListContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      modalDisplay: false
    }
  }

  handleAddList = () => {
    this.setState({
      modalDisplay: !this.state.modalDisplay
    })
  }


  render(){
    return(
      <div>
        <div>
          <CreateListForm />
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
