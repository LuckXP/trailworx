'use strict';

import React from 'react'
import Head from './head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import WorxMap from './worx-map/worx-map'
import Navbar from './navbar/navbar'
import NotificationBar from './notification-bar'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#42A5F5',
  },
});
console.log(muiTheme);
export default () => {
  return (
    <div id="app">
      <Head />
      <MuiThemeProvider muiTheme={muiTheme} >
        <NotificationBar>
          <Navbar />
          <WorxMap />
        </NotificationBar>
      </MuiThemeProvider>
    </div>
  )
};
