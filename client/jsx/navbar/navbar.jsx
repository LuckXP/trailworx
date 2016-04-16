import React from 'react'
import {AppBar, FlatButton} from 'material-ui'

export default class extends React.Component{
  render() {
    return (
      <AppBar style={{position: "fixed", top: 0, left: 0, right: 0}}
        title={<i className="fa fa-home"/>}
        iconElementRight={<FlatButton label="Sign In"/>}
      />

    )
  }
}



