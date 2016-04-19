'use strict';

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WorxMap from './worx-map/worx-map'
import Navbar from './navbar/navbar'
import NotificationBar from './notification-bar'

export default () => {
  return (
    <MuiThemeProvider>
      <NotificationBar>
        <Navbar />
        <WorxMap />
        <img src="/gridfs/worx-photos/d41d8cd98f00b204e9800998ecf8427e" />
      </NotificationBar>
    </MuiThemeProvider>
  )
};
