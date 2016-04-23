import React from 'react'
import LoginButton from './login-button'

export default ({onClick}) => {
  return <LoginButton onClick={onClick} backgroundColor="#f90101" iconClass="google" serviceName="Google" />;
}