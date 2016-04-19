'use strict';

import React from 'react'
import {IconButton} from 'material-ui'
import {colors as Colors} from 'material-ui/styles'
import {MapsMyLocation} from 'material-ui/svg-icons'

const StatelessFunction = ({onClick, disabled}) => {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        padding: 5,
        width: 38,
        height: 38,
        borderRadius: '50%',
        backgroundColor: Colors.faintBlack
      }}
    >
      <MapsMyLocation color={Colors.blue700} />
    </IconButton>
  )
};

StatelessFunction.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool.isRequired
};

export default StatelessFunction;