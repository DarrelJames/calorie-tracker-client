import React from 'react';
import { connect } from 'react-redux'


const MessageAlert = ({message, status}) => {
  const className = `ui message ${status === 'success' ? 'positive' : 'negative'}`
  if (status === "success" || status === "error"){
    return (
      <div className={className}>
        <p>{message}</p>
      </div>
    )
  } else {
    return <></>
  }
}

const mapStateToProps = ({ auth: { message, status }}) => ({message})

export default connect(mapStateToProps)(MessageAlert);
