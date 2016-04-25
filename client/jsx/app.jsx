'use strict';

import React from 'react'
import Head from './head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WorxMap from './worx-map/worx-map'
import Navbar from './navbar/navbar'
import NotificationBar from './notification-bar'

export default () => {
  return (
    <div id="app">
      <Head />
      <MuiThemeProvider>
        <NotificationBar>
          <Navbar />
          <WorxMap />
        </NotificationBar>
      </MuiThemeProvider>
    </div>
  )
};
