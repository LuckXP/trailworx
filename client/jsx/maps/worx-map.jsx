'use strict';

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
// import { Geolocation } from 'mdg/geolocation'
import mapStyles from '../../stylesheets/map-styles'
import { GoogleMap, Marker } from 'react-google-maps'
import MapLoader from './map-loader'

const mapMeteorToProps = (props) => {
  const currentLocation = Geolocation.latLng();
  const lat = currentLocation ? currentLocation.lat : 0;
  const lng = currentLocation ? currentLocation.lng : 0;
  return {lat, lng};
}

const WorxMap = (props) => {
  const { lat, lng } = props
  return (
    <MapLoader>
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={{ lat, lng }}
        options={{ styles: mapStyles }}
      >
        <Marker position={{ lat, lng }} onClick={() => alert('hello world')} />
      </GoogleMap>
    </MapLoader>
  )
}

export default createContainer(mapMeteorToProps, WorxMap);