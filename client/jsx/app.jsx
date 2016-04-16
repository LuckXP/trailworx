'use strict';

import React from 'react'
import {RaisedButton} from 'material-ui'
import {MuiThemeProvider} from 'material-ui/styles'
import WorxMap from './maps/worx-map'
import Navbar from './navbar/navbar'

const takePicture = () => {
  MeteorCamera.getPicture((error, data) => {
    console.log(error);
    console.log(data);
  });
};

export default () => {
  console.log(Navbar);
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <WorxMap />
        <RaisedButton label={'Take Picture'} onClick={takePicture} />
      </div>
    </MuiThemeProvider>
  )
};
