'use strict';

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WorxMap from './worx-map/worx-map'
import Navbar from './navbar/navbar'

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
