import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'
import {InfoWindow} from 'react-google-maps'

const mapMeteorToProps = ({ currentWorxId }) => {
  return {
    worx: currentWorxId ? Worx.findOne(currentWorxId) : null
  }
};

const WorxInfoWindow = ({worx, open, onRequestDetails, onRequestClose, ...props}) => {
  const title = worx && `Lat: ${worx.location.lat}, Lng: ${worx.location.lng}`;

  return open && worx && <InfoWindow
    position={worx.location} {...props}
    onCloseclick={onRequestClose} >
      <div>
        <div>{`Lat: ${worx.location.lat}, Lng: ${worx.location.lng}`}</div>
        <div>{ worx.getCategory().name }</div>
        <button onClick={onRequestDetails} >View Details</button>
    </div>
  </InfoWindow>;
};

WorxInfoWindow.propTypes = {
  worx: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onRequestDetails: PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, WorxInfoWindow);