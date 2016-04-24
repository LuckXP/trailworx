import {default as React, PropTypes} from 'react'
import {Marker} from 'react-google-maps'
const iconBase = '/images/';

const WorxMarker = ({currentWorxId, worx, onClick, ...props}) => {
  const isCurrent = currentWorxId === worx._id;

  return <Marker
    position={worx.location}
    onClick={() => onClick(worx._id)}
    icon={iconBase + (isCurrent ? 'ic_place_white_36dp_1x.png' : 'ic_place_black_36dp_1x.png')}
    {...props}
  />;
};

WorxMarker.propTypes = {
  currentWorxId: PropTypes.string,
  worx: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default WorxMarker;