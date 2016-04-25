import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'
import Dialog from '../shared/dialog'
import FlatButton from 'material-ui/FlatButton'

const mapMeteorToProps = ({ currentWorxId }) => {
  return {
    worx: currentWorxId ? Worx.findOne(currentWorxId) : null
  }
};

const WorxDetailsDialog = (props) => {
  const {worx, onRequestClose} = props;

  const title = worx && `Lat: ${worx.location.lat}, Lng: ${worx.location.lng}`;
  const actions = <FlatButton label="Close" onClick={() => onRequestClose()} />;

  const dialogChildren = worx && (
    <h3>
      { worx.getCategory().name }
    </h3>
  );

  return (
    <Dialog
      {...{title, actions}}
      {...props}
    >
      {dialogChildren}
    </Dialog>
  )
};

WorxDetailsDialog.propTypes = {
  worx: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, WorxDetailsDialog);