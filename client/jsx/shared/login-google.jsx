import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const StatelessFunction = (props) => {
  return <FlatButton
    style={{
      backgroundColor: "#f90101",
      color: "white"
    }}
    label={<span> <i className="fa fa-google" aria-hidden="true" />  Sign in with Google </span>}
    onClick={ props.onClick }/>
};

StatelessFunction.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default StatelessFunction;