import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

const ListCard = (props) => {


  return(
    <Link className='item' to={`/mylists/${props.playlist.id}`}>
    <Card onClick={() => (props.select_list(props.playlist))} id={props.playlist.id}>
      <Image style={{display: 'block'}} src={props.playlist.image? props.playlist.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZPd4618kfPOrzfH2Vcmyf6wHO1zpE9IUNkH7xpGuRsn07ytR'} size='medium'/>
      <Card.Content>
        <Card.Header>{props.playlist.name}</Card.Header>
        <Card.Description>
        {props.playlist.description}<br></br>
      <b>Total Songs:</b> {props.playlist.songs? props.playlist.songs.length: 0}
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
