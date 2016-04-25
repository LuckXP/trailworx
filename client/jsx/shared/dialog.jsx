import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import MaterialDialog from 'material-ui/Dialog'

const mapMeteorToProps = () => {
  return {
    expandDialog: rwindow.innerWidth() < 768
  }
};

const contentStyleSmall = {
  marginLeft: 0,
  marginRight: 0,
  width: 'auto',
  left: 5,
  right: 5,
  top: 10,
  bottom: 10,
  position: 'absolute'
};

const actionContainerStyleSmall = {
  bottom: 3
};

const bodyStyleSmall = {
  padding: 0,
  marginLeft: 7,
  marginRight: 7
};

const Dialog = ({expandDialog, ...props}) => {
  return (

    <MaterialDialog
      { ...props }
      autoScrollBodyContent={ true }
      bodyStyle={ expandDialog ? bodyStyleSmall : null }
      actionsContainerStyle={ expandDialog ? actionContainerStyleSmall : null }
      contentStyle={ expandDialog ? contentStyleSmall : null }
    />
  );
};

Dialog.propTypes = {};

export default createContainer(mapMeteorToProps, Dialog);