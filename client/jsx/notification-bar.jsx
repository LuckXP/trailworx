import React from 'react'
import Snackbar from 'material-ui/Snackbar'

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to TrailWorx'
    };
  }

  displayNotification(message) {
    this.setState({ message });
  }

  getChildContext() {
    return {
      displayNotification: (message) => this.displayNotification(message)
    }
  }

  render() {
    const {children} = this.props;
    const {message} = this.state;

    return (
      <div id="notification-bar">
        {children}
        <Snackbar
          open={true}
          autoHideDuration={3000}
          message={ <span style={{fontSize: 20}}>{message}</span> }
          bodyStyle={{'textAlign': 'center', fontFamily: "'Roboto', sans-serif"}}
        />
      </div>
    )
  }
}

Component.propTypes = {
  children: React.PropTypes.node.isRequired
};

Component.childContextTypes = {
  displayNotification: React.PropTypes.func
};

export default Component;