import React from 'react'
import LoginButton from './login-button'

export default ({onClick}) => {
  return <LoginButton onClick={onClick} backgroundColor="#3B5998" iconClass="facebook" serviceName="Facebook" />;
}