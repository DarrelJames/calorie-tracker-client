import React from 'react';
import { Link } from 'react-router-dom';


const RegistrationMessage = ({message, link, linkText}) => {
  return (
    <div className='ui message'>
      {message} <Link to={link}>{linkText}</Link>
    </div>
  )
}


export default RegistrationMessage;
