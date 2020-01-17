import React from 'react';
import { connect } from 'react-redux'
import { logOut } from '../actions'


const LogOut = ({logOut}) => {
  const handleLogOut = () => {
    logOut()
  }

  return (
    <button onClick={handleLogOut}>Log Out</button>
  )
}


export default connect(null, { logOut })(LogOut);
