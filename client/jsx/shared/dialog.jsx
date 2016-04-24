import React from 'react'
import Dialog from 'material-ui/Dialog'

const StatelessFunction = ({ children, ...otherProps }) => {
  
  return (
    
    <Dialog 
      { ...otherProps } 
      style={{}}
    >
      { children }
    </Dialog>
    
  );
};

StatelessFunction.propTypes = {};

export default StatelessFunction;