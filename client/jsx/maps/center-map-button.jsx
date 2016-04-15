'use strict';

import React from 'react';
import {IconButton} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';
import {MapsMyLocation} from 'material-ui/lib/svg-icons';

export default ({onClick}) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        borderRadius: '50%',
        backgroundColor: Colors.faintBlack
      }}
    >
      <MapsMyLocation color={Colors.blue700} />
    </IconButton>
  )
};