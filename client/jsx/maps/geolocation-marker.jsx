import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Marker, Circle} from 'react-google-maps'

const mapMeteorToProps = (props) => {
  const currentLocation = Geolocation.currentLocation();

  return {
    position: currentLocation && { lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude },
    accuracy: currentLocation && currentLocation.coords.accuracy
  }
};

const GeolocationMarker = ({position, accuracy, centered, markerOptions, circleOptions, onClick, ...props}) => {
  if (!position) return null;

  const markerDefaultOpts = {
    'clickable': onClick != null,
    'cursor': 'pointer',
    'draggable': false,
    'flat': true,
    'icon': {
      'url': centered ? '/images/geolocation-marker-centered.png' : '/images/geolocation-marker.png',
      'size': new google.maps.Size(22, 22),
      'scaledSize': new google.maps.Size(22, 22),
      'origin': new google.maps.Point(0, 0),
      'anchor': new google.maps.Point(11, 11)
    },
    // This marker may move frequently - don't force canvas tile redraw
    'optimized': false,
    'title': 'Current location',
    'zIndex': 2
  };

  const circleDefaultOpts = {
    'clickable': false,
    'radius': 0,
    'strokeColor': 'blue',
    'strokeOpacity': .3,
    'strokeWeight': 1,
    'fillColor': 'blue',
    'fillOpacity': .05,
    'zIndex': 1
  };

  markerOptions = {
    ...markerDefaultOpts,
    ...markerOptions
  };

  circleOptions = {
    ...circleDefaultOpts,
    ...circleOptions
  };

  return (
    <div id="geolocation-marker" >
      <Marker {...{position, onClick}} options={markerOptions} {...props} />
      <Circle center={position} radius={accuracy} options={circleOptions} {...props} />
    </div>
  );
};

GeolocationMarker.propTypes = {
  centered: PropTypes.bool,
  markerOptions: PropTypes.object,
  circleOptions: PropTypes.object,
  onClick: PropTypes.func
};

GeolocationMarker.defaultProps = {
  centered: false
};

export default createContainer(mapMeteorToProps, GeolocationMarker);