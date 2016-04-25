import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import MaterialDialog from 'material-ui/Dialog'

const mapMeteorToProps = () => {
  return {
    expandDialogWidth: rwindow.innerWidth() < 768
  }
};

const Dialog = ({expandDialogWidth, ...props}) => {
  return (

    <MaterialDialog
      { ...props }

      contentStyle={{
        marginLeft: expandDialogWidth ? 0 : 'auto',
        marginRight: expandDialogWidth ? 0 : 'auto',
        width: expandDialogWidth ? '100%' : '75%'
      }}
    />
  );
};

Dialog.propTypes = {};

export default createContainer(mapMeteorToProps, Dialog);