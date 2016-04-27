'use strict';

import React from 'react';
import {getMuiTheme, Colors} from 'material-ui/styles';

class MUIConfig extends React.Component {
  constructor(props) {
    super(props);
    const muiTheme = getMuiTheme({});
    this.configureTheme(muiTheme);
    this.state = {muiTheme};
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    }
  }

  configureTheme(t) {
    console.log(t);
  }

  render() {
    console.log(this.props.children);
    return this.props.children;
  }
}

MUIConfig.propTypes = {
  children: React.PropTypes.node.isRequired
};

MUIConfig.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default MUIConfig;
