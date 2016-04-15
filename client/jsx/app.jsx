'use strict';

import React from 'react'
import {MuiThemeProvider} from 'material-ui/styles'
import WorxMap from './maps/worx-map'
import Navbar from './navbar/navbar'

export default () => {
  console.log(Navbar);
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <WorxMap />
      </div>
    </MuiThemeProvider>
  )
};
