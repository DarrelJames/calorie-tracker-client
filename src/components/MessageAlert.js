import React from 'react';
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

const MessageAlert = ({message, status}) => {
  const messageType = status === 'success' ? ({positive: true}) : ({negative: true})
  if ((status === "success" || status === "error")  && message){
    return (
        <Message {...messageType}>
          <p>{message}</p>
        </Message>
        )
  } else {
      return <></>
  }
}

const mapStateToProps = ({ auth: { message, status }}) => ({message, status})

export default connect(mapStateToProps)(MessageAlert);
