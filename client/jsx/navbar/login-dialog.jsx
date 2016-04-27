import React from 'react'
import Dialog from '../shared/dialog'
import NeutralButton from '../shared/neutral-button'
import {Meteor} from 'meteor/meteor'
import LoginFacebook from '../shared/login-facebook'
import LoginTwitter from '../shared/login-twitter'
import LoginGoogle from '../shared/login-google'
import Paper from 'material-ui/Paper'

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
    const {open, closeLoginDialog} = this.props;

    return (
      <Dialog
        open={open}
        actions={ <NeutralButton label="close" onClick={ closeLoginDialog }/> }
        onRequestClose={ closeLoginDialog }
      >
        <Paper
          zDepth={3}
          style={{
            marginTop: 50
          }}>
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
        </Paper>
      </Dialog>
    )
  }
};

Component.contextTypes = {
  displayNotification: React.PropTypes.func.isRequired
};

export default Component;

