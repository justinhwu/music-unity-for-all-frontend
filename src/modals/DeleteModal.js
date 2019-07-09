import React from 'react'
import { Checkbox, Button, Header, Icon, Modal, Form } from 'semantic-ui-react'


class DeleteModal extends React.Component{
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  handleDelete = () => {
    this.close()
    this.props.handleDelete()
  }

  render(){
    const { open, size } = this.state
    return(
      <div>
      <Button animated='fade' floated='right' size='large' onClick={this.show('tiny')}>
        <Button.Content visible>
          <Icon name='delete' />
        </Button.Content>
        <Button.Content hidden>Delete List</Button.Content>
      </Button>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Delete This List</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this list?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>No</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={() => this.handleDelete()}/>
          </Modal.Actions>
      </Modal>
    </div>
    )
  }
}

export default DeleteModal
