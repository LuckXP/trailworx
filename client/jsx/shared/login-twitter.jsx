import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const StatelessFunction = (props) => {
  return <FlatButton
    style={{
      backgroundColor: "#00aced",
      color: "white"
    }}
    label={<span> <i className="fa fa-twitter" aria-hidden="true" />  Sign in with Twitter </span>}
    onClick={ props.onClick }/>
};

StatelessFunction.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default StatelessFunction;