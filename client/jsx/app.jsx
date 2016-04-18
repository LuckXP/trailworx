'use strict';

import React from 'react'
import {RaisedButton} from 'material-ui'
import {MuiThemeProvider} from 'material-ui/styles'
import WorxMap from './maps/worx-map'
import Navbar from './navbar/navbar'
import CameraButton from './shared/camera-button'
import WorxPhoto from '../../models/worx-photo'

export default () => {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <WorxMap />
        <CameraButton
          onPictureTaken={blob => {

          }}
          onNoImageSelected={error => console.log('No image', error)}
          onError={error => console.log('Error', error)}
        >
          <RaisedButton label={'Take Picture'} />
        </CameraButton>
      </div>
    </MuiThemeProvider>
  )
};
