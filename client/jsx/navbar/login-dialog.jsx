import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {Meteor} from 'meteor/meteor'


class Component extends React.Component {
  constructor(props) {
    super(props);
  }
  loginCallBack(err) {
    console.log("called", this)
    const {displayNotification} = this.context;
    if(err) {
      console.log(err);
      displayNotification('You could not be logged in.');
    } else {
      displayNotification('You logged in.');
    }
    this.props.closeLoginDialog();

  }
  render() {
    return (
      <Dialog open={this.props.open} actions={ <FlatButton label="close" onClick={ this.props.closeLoginDialog }/> }>
        <FlatButton label="Facebook" onClick={ () => Meteor.loginWithFacebook( (err) => this.loginCallBack(err) ) }/>
        <FlatButton label="Google" onClick={ () => Meteor.loginWithGoogle( (err) => this.loginCallBack(err) ) }/>
        <FlatButton label="Twitter" onClick={ () => Meteor.loginWithTwitter( (err) => this.loginCallBack(err) ) }/>
      </Dialog>
    )
  }
};

Component.contextTypes = {
  displayNotification: React.PropTypes.func.isRequired
};

export default Component;

