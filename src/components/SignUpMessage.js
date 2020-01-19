import React from 'react';
import { Link } from 'react-router-dom';


const SignUpMessage = (props) => {
  return (
    <div className='ui message'>
      New to us? <Link to='/signup'>Sign Up</Link>
    </div>
  )
}


export default SignUpMessage;
