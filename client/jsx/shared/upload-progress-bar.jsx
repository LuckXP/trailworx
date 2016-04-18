'use strict';

import React from 'react'
import {LinearProgress} from 'material-ui'

const StatelessFunction = ({progress}) => {
  return <LinearProgress mode="determinate" value={progress} />
};

StatelessFunction.propTypes = {
  progress: React.PropTypes.number.isRequired
};

export default StatelessFunction;