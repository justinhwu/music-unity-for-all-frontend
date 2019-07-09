import React from 'react'
import { Card } from 'semantic-ui-react'
import ListCard from '../components/ListCard'
import {connect} from 'react-redux'
import CreateListForm from '../modals/CreateListForm'
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
          <CreateListForm edit={false}/>
        </div>
        <Card.Group>
          {this.props.lists.map((playlist)=>(
            <ListCard playlist={playlist} key={playlist.id} id={playlist.id} />
          ))}
        </Card.Group>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.user,
  lists: state.lists
})


export default connect(mapStateToProps)(ListContainer)
