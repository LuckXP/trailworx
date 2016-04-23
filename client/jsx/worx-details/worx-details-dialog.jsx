import React from 'react'
import Dialog from '../shared/dialog'

const StatelessFunction = (props) => {
  const {worx, onRequestClose} = props;
  
  return (
    <Dialog 
      title={ worx.location.lat + ' ' + worx.location.lng }
      open={true}
      onRequestClose={ onRequestClose }
    > 
      <h3>
        { worx.getCategory().name }
      </h3>
    </Dialog>
    
  )
};

StatelessFunction.propTypes = {
  worx: React.PropTypes.object.isRequired,
  onRequestClose: React.PropTypes.func.isRequired
};

export default StatelessFunction;
