import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {Meteor} from 'meteor/meteor'


export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog open={this.props.open} actions={ <FlatButton label="close" onClick={ this.props.closeLoginDialog }/> }>
        <FlatButton label="Facebook" onClick={ () => Meteor.loginWithFacebook() }/>
        <FlatButton label="Google" onClick={ () => Meteor.loginWithGoogle() }/>
        <FlatButton label="Twitter" onClick={ () => Meteor.loginWithTwitter() }/>
      </Dialog>
    )
  }
}