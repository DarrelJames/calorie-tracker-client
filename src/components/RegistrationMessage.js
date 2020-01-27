import React from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react'

const RegistrationMessage = ({message, link, linkText}) => {
  return (
    <Message>
      {message} <Link to={link}>{linkText}</Link>
    </Message>
  )
}


export default RegistrationMessage;
