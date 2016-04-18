'use strict';

import React from 'react'
import {RaisedButton} from 'material-ui'
import {MuiThemeProvider} from 'material-ui/styles'
import WorxMap from './worx-map/worx-map'
import Navbar from './navbar/navbar'
import CameraButton from './shared/camera-button'
import WorxPhoto from '../../models/worx-photo'

export default () => {
  return (
    <MuiThemeProvider>
      <div id="app">
        <Navbar />
        <WorxMap />
      </div>
    </MuiThemeProvider>
  )
};
