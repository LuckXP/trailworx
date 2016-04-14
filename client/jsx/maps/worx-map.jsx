'use strict';

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
//import { Geolocation } from 'mdg/mobile-packages'
import styles from '../../stylesheets/map-styles'
import { GoogleMap, Marker } from 'react-google-maps'
import MapLoader from './map-loader'

const mapMeteorToProps = (props) => {
  let currentLocation = Geolocation.latLng() || { lat: 0, lng: 0 };
  return {currentLocation};
};

const WorxMap = (props) => {
  const { currentLocation } = props;
  let geoMarker;
  return (
    <MapLoader>
      <GoogleMap
        ref={
          mapComponent => {
            if (mapComponent != null) {
              geoMarker = new GeolocationMarker(googleMapComponent.props.map);
            }
          }
        }
        defaultZoom={15}
        center={currentLocation}
        options={{styles}}
        onDragstart={() => alert('dragging...')}
      >
        <Marker position={currentLocation} onClick={() => alert('hello world')} />
      </GoogleMap>
    </MapLoader>
  )
};

export default createContainer(mapMeteorToProps, WorxMap);