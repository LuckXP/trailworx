import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const StatelessFunction = (props) => {
  return <FlatButton
    style={{
      backgroundColor: "#3B5998",
      color: "white",
    }}
    label={<span> <i className="fa fa-facebook" aria-hidden="true" />  Sign in with Facebook </span>}
    onClick={ props.onClick }/>
};

StatelessFunction.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default StatelessFunction;