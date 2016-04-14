'use strict';

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
// import { Geolocation } from 'mdg/geolocation'
import mapStyles from '../../stylesheets/map-styles'
import { GoogleMap, Marker } from 'react-google-maps'
import MapLoader from './map-loader'

const mapMeteorToProps = (props) => {
  return {
    currentLocation: Geolocation.latLng()
  }
}

const WorxMap = (props) => {
  const { currentLocation } = props
  return (
    <MapLoader>
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: currentLocation.lat, lng: currentLocation.lng }}
        options={{ styles: mapStyles }}
      >
        <Marker position={{ lat: currentLocation.lat, lng: currentLocation.lng }} onClick={() => alert('hello world')} />
      </GoogleMap>
    </MapLoader>
  )
}

export default createContainer(mapMeteorToProps)(WorxMap);