import React from 'react'
import {AppBar, FlatButton} from 'material-ui'
import LoginDialog from './login-dialog'
import SignInOutButton from './sign-in-out-button'





export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDialogOpen: false
    }
  }

  render() {
    return (
      <div>
        <AppBar
          style={{position: "fixed", top: 0, left: 0, right: 0}}
          title="TrailWorx"
          iconElementRight={ <SignInOutButton onSignInClick={ () => this.setState({ loginDialogOpen: true }) } />  }
        />
        <LoginDialog open={ this.state.loginDialogOpen } closeLoginDialog={ () => this.setState({ loginDialogOpen: false }) } />
      </div>

    )
  }
}



