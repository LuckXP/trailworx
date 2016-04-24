import React from 'react'
import Dialog from '../shared/dialog'
import FlatButton from 'material-ui/FlatButton'
import {Meteor} from 'meteor/meteor'
import LoginFacebook from '../shared/login-facebook'
import LoginTwitter from '../shared/login-twitter'
import LoginGoogle from '../shared/login-google'


class Component extends React.Component {
  constructor(props) {
    super(props);
  }
  loginCallBack(err) {
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
    const {closeLoginDialog} = this.props;

    return (
      <Dialog
        open={this.props.open}
        actions={ <FlatButton label="close"
        onClick={ closeLoginDialog }/> }
        style={{
          width: 'auto',
          margin: 0
        }}
        contentStyle={{
          display: "flex",
          justifyContent: "center"
        }}
        onRequestClose={ closeLoginDialog }
      >
        <div>
          <LoginFacebook onClick={ () => Meteor.loginWithFacebook( (err) => this.loginCallBack(err) ) }/>
        </div>
        <br/>
        <div>
          <LoginGoogle onClick={ () => Meteor.loginWithGoogle( (err) => this.loginCallBack(err) ) }/>
        </div>
        <br/>
        <div>
          <LoginTwitter onClick={ () => Meteor.loginWithTwitter( (err) => this.loginCallBack(err) ) }/>
        </div>
      </Dialog>
    )
  }
};

Component.contextTypes = {
  displayNotification: React.PropTypes.func.isRequired
};

export default Component;

