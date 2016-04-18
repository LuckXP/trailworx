import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo'

// todo: disable when no user logged in
const StatelessFunction = (props) => {
  return (
    <FloatingActionButton disabled={false} onClick={props.onClick}>
      <ImageAddAPhoto />
    </FloatingActionButton>
  )
};

StatelessFunction.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default StatelessFunction;