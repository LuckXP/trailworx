import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import {Meteor} from 'meteor/meteor'
import LoginDialog from './login-dialog'
import UserAvatar from '../shared/user-avatar'
import {createContainer} from 'meteor/react-meteor-data'

const mapMeteorToProps = props => {
  const user = Meteor.user();
  return {
    loggedIn: user != null,
    userName: user && user.profile.name
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
    const {displayNotification} = this.context;
    if(err) {
      console.log(err);
      displayNotification('You could not be logged out.');
    } else {
      displayNotification('You logged out.');
    }
  }

  render() {
    const userName = this.props.userName;
    const signIn = <FlatButton label="Sign In" onClick={ () => this.setState({ loginDialogOpen: true }) } />;
    const signOut = (
      <FlatButton
        label="Logout"
        labelPosition="before"
        labelStyle={{paddingRight: 8}}
        onClick={ () => Meteor.logout( (err) => this.logOutCallBack(err) ) }
      >
        <UserAvatar />
      </FlatButton>
    );
    const correctButton = !this.props.loggedIn ? signIn : signOut;
    return (
      <div id="navbar">
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

Component.contextTypes = {
  displayNotification: React.PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, Component);

