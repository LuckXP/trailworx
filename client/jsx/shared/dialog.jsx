import {default as React, PropTypes} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import MediaQueries from 'meteor/jcheroske:responsive-media-queries'
import MaterialDialog from 'material-ui/Dialog'

const mapMeteorToProps = () => {
  return {
    isPortraitPhone: MediaQueries.isPortraitPhone()
  }
};

const Dialog = ({isPortraitPhone, ...props}, {muiTheme}) => {
  const phoneStyles = {
    autoDetectWindowHeight: false,
    autoScrollBodyContent: false,
    contentClassName: 'dialog-content',
    contentStyle: {
      margin: 0,
      width: 'auto',
      transform: 'initial',
      position: 'fixed',
      top: muiTheme.appBar.height + 5,
      bottom: 5,
      left: 5,
      right: 5
    },
    bodyStyle: {
      //borderColor: 'blue',
      //borderWidth: 1,
      //borderStyle: 'solid',
      overflow: 'scroll',
      maxHeight: 'calc(100% - 52px)',
      padding: 0
    },
    actionsContainerStyle: {
      marginBottom: 0,
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  };

  return (
    <MaterialDialog
      { ...props }
      { ...isPortraitPhone ? phoneStyles : null }
    />
  );
};

Dialog.propTypes = {};

Dialog.contextTypes = {
  muiTheme: PropTypes.object
};

export default createContainer(mapMeteorToProps, Dialog);