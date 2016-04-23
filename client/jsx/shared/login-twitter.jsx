import React from 'react'
import LoginButton from './login-button'

export default ({onClick}) => {
  return <LoginButton onClick={onClick} backgroundColor="#00aced" iconClass="twitter" serviceName="Twitter" />;
}