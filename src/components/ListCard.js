import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

const ListCard = (props) => {
  const {songs, mixclouds, image, id, name, description} = props.playlist

  const songCount = () => {
    let sum = 0
    if(songs===true && mixclouds===true){
      sum = songs.length + mixclouds.length
    }
    else if(songs===false && mixclouds===false){
    }
  }

  return(
    <Link className='item' to={`/mylists/${.id}`}>
    <Card onClick={() => (props.select_list(props.playlist))} id={.id}>
      <Image style={{display: 'block'}} src={.image? .image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZPd4618kfPOrzfH2Vcmyf6wHO1zpE9IUNkH7xpGuRsn07ytR'} size='medium'/>
      <Card.Content>
        <Card.Header>{.name}</Card.Header>
        <Card.Description>
        {.description}<br></br>
      <b>Total Songs:</b> {.songs? .songs.length: 0}<br></br>

        </Card.Description>
      </Card.Content>

    </Card>
    </Link>
  )
}

const mapDispatchtoProps = (dispatch) => {
  return{
    select_list: (list) => dispatch({type:'SELECTED_LIST', payload: list})
  }
}

export default connect(null, mapDispatchtoProps)(ListCard)
