import {default as React, PropTypes} from 'react'
import {Marker} from 'react-google-maps'
const iconBase = '/images/marker-icons/';

const WorxMarker = ({currentWorxId, worx, onClick, ...props}) => {
  const isCurrent = currentWorxId === worx._id;

  return <Marker
    position={worx.location}
    onClick={() => onClick(worx._id)}
    icon={{
      'url': iconBase + ( isCurrent ? 'marker-selected.png' : worx.getCategory().markerFilename ),
      'size': new google.maps.Size(21, 30),
      'scaledSize': new google.maps.Size(21, 30),
      'origin': new google.maps.Point(0, 0),
      'anchor': new google.maps.Point(10, 30)
    }}
    options={{zIndex: 3}}
    {...props}
  />;
};

WorxMarker.propTypes = {
  currentWorxId: PropTypes.string,
  worx: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default WorxMarker;