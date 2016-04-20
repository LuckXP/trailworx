import React from 'react'
import {Meteor} from 'meteor/meteor'
import FlatButton from 'material-ui/FlatButton'
import {createContainer} from 'meteor/react-meteor-data'

const mapMeteorToProps = props => {
  return {
    loggedIn: Meteor.userId() != null
  }
}

const StatelessFunction = (props) => {
  const signIn = <FlatButton label="Sign In" onClick={ props.onSignInClick } />;
  const signOut = <FlatButton label="Sign Out" onClick={ () => Meteor.logout() } />;
  return !props.loggedIn ? signIn : signOut;
};

StatelessFunction.propTypes = {
  onSignInClick: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool.isRequired
};

export default createContainer(mapMeteorToProps, StatelessFunction);