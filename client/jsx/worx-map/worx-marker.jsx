import {default as React, PropTypes} from 'react'
import {Marker} from 'react-google-maps'
const iconBase = '/images/marker-icons/';

const WorxMarker = ({currentWorxId, worx, onClick, ...props}) => {
  const isCurrent = currentWorxId === worx._id;

  return <Marker
    position={worx.location}
    onClick={() => onClick(worx._id)}
    icon={iconBase + ( isCurrent ? 'marker-selected.png' : worx.getCategory().markerFilename )}
    {...props}
  />;
};

WorxMarker.propTypes = {
  currentWorxId: PropTypes.string,
  worx: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default WorxMarker;