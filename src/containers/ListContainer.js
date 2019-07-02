import React from 'react'
import MusicCard from '../components/MusicCard'
import { Button, Icon } from 'semantic-ui-react'
class ListContainer extends React.Component{


  render(){
    return(
      <div>
        <Button animated='fade'>
          <Button.Content visible>
            <Icon name='plus' />
          </Button.Content>
          <Button.Content hidden>New List</Button.Content>
        </Button>

      </div>
    )
  }

}

export default ListContainer
