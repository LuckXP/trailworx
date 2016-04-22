import React from 'react'
import {AppBar, FlatButton} from 'material-ui'
import {Meteor} from 'meteor/meteor'
import LoginDialog from './login-dialog'
import {createContainer} from 'meteor/react-meteor-data'

const mapMeteorToProps = props => {
  return {
    loggedIn: Meteor.userId() != null,
    userName: Meteor.user() && Meteor.user().profile && Meteor.user().profile.name
  }
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDialogOpen: false
    }
  }

  logOutCallBack(err) {
    console.log("called", this)
    const {displayNotification} = this.context;
    if(err) {
      console.log(err);
      displayNotification('You could not be logged out.');
    } else {
      displayNotification('You logged out.');
    }
    this.props.closeLoginDialog();

  }

  render() {
    const userName = this.props.userName;
    const signIn = <FlatButton label="Sign In" onClick={ () => this.setState({ loginDialogOpen: true }) } />;
    const signOut = <FlatButton label={ "Sign Out " + userName } onClick={ () => Meteor.logout( (err) => logOutCallBack(err) ) } />;
    const correctButton = !this.props.loggedIn ? signIn : signOut;
    return (
      <div>
        <AppBar
          style={{position: "fixed", top: 0, left: 0, right: 0}}
          title="TrailWorx"
          iconElementRight={ correctButton }
        />
        <LoginDialog open={ this.state.loginDialogOpen } closeLoginDialog={ () => this.setState({ loginDialogOpen: false }) } />
      </div>

    )
  }
}

export default createContainer(mapMeteorToProps, Component);

