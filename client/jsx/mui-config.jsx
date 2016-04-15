'use strict';

import React from 'react';
import {AppCanvas} from 'material-ui'
import {getMuiTheme, Colors} from 'material-ui/lib/styles';

class MUIConfig extends React.Component {
  constructor() {
    super();
    const muiTheme = getMuiTheme({});
    this.configureTheme(muiTheme);
    this.state = {muiTheme};
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    }
  }

  configureTheme(t) {}

  render() {
    return (
      <AppCanvas>
        {this.props.children}
      </AppCanvas>
    )
  }
}

MUIConfig.propTypes = {
  children: React.PropTypes.node.isRequired
};

MUIConfig.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default MUIConfig;
