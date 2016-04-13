'use strict';

import {GoogleMap, Marker} from 'react-google-maps'
import MapLoader from './map-loader'

export default () => {
  return (
    <MapLoader>
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{lat: -25.363882, lng: 131.044922}}
        options={{styles: mapStyles}}
      >
        <Marker position={ {lat: -25.363882, lng: 131.044922} } onClick={() => alert('hello world')} />
      </GoogleMap>
    </MapLoader>
  )
}