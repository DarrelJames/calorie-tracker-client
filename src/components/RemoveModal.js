import React from 'react'
import { deleteEntry } from '../actions'
import { connect } from 'react-redux'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class RemoveModal extends React.Component {
  state = {open: false}

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({open: false})

  render(){
    const { open } = this.state
    const { entry, label} = this.props

    return (
      <div>
        <Button onClick={this.show()} negative>Remove</Button>

        <Modal dimmer='blurring' basic open={open} onClose={this.close} size='mini'>
          <Header icon='trash' content={label} />
          <Modal.Content>
            <p>
              Are you sure you want to remove?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={this.close}>
              <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted onClick={() => this.props.deleteEntry(entry)}>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
  )}

}

export default connect(null, { deleteEntry } )(RemoveModal)
