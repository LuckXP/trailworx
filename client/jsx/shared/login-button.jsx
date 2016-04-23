import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const style = {
  color: 'white',
  whiteSpace: 'nowrap',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
};

const StatelessFunction = ({onClick, backgroundColor, iconClass, serviceName}) => {
  return <FlatButton
    style={ { ...style, backgroundColor } }
    label={<span><i className={'fa fa-lg fa-' + iconClass} aria-hidden="true" style={{marginRight: '4px'}} />  Sign in with {serviceName}</span>}
    onClick={onClick}
  />;
};

StatelessFunction.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string.isRequired,
  serviceName: React.PropTypes.string.isRequired
};

export default StatelessFunction;