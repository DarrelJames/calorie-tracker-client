import React from 'react';
import { connect } from 'react-redux'
import { logOut } from '../actions'


const LogOut = ({logOut}) => {  

  return (
    <button onClick={() => logOut()}>Log Out</button>
  )
}


export default connect(null, { logOut })(LogOut);
