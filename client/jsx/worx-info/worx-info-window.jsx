import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'
import {InfoWindow} from 'react-google-maps'


const mapMeteorToProps = ({ currentWorxId, onRequestClose }) => {
  const worx = Worx.findOne(currentWorxId);
  if (worx) {
    return {worx};
  } else {
    //onRequestClose(); // causing infinite loop
    return {};
  }
};

const WorxInfoWindow = ({worx, open, onRequestDetails, onRequestClose, currentWorxId, ...props}) => {
  if(!currentWorxId || !worx) {
    return null;
  }
  const firstPhoto = worx.getWorxPhotos().fetch()[0];
  return open && worx && <InfoWindow
    position={worx.location} {...props}
    onCloseclick={onRequestClose} >
      <div>
        <div className="infoWindowText">{ worx.getCategory().name }</div>
        <img
          src={ firstPhoto.uri }
          className="img-thumbnail"
        />
        <br/>
        <button className="infoWindowButton" onClick={onRequestDetails} >VIEW DETAILS</button>
    </div>
  </InfoWindow>;
};

WorxInfoWindow.propTypes = {
  worx: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onRequestDetails: PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, WorxInfoWindow);