'use strict';

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
//import { Geolocation } from 'mdg/mobile-packages'
import styles from '../../stylesheets/map-styles'
import { GoogleMap, Marker } from 'react-google-maps'
import MapLoader from '../maps/map-loader'
import GeolocationMarker from '../maps/geolocation-marker'
import CenterMapButton from '../maps/center-map-button'
import NewWorxManager from './../new-worx/new-worx-manager'
import Worx from '../../../models/worx'
import WorxDetailsManager from '../worx-details/worx-details-manager'


const mapMeteorToProps = (props) => {
  return {
    currentLocation: Geolocation.latLng() || { lat: 0, lng: 0 },
    worxs: Worx.find().fetch()
  };
};

class WorxMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerOnGeolocation: true,
      currentWorxId: null
    }
  }
  
  onWorxDetailsClose() {
    this.setState({
      currentWorxId: null
    });
  }

  mapOptions() {
    return {
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      styles
    }
  }

  handleMapDrag() {
    this.setState({
      centerOnGeolocation: false
    });
  }

  handleCenterMapButtonClick() {
    this.setState({
      centerOnGeolocation: true
    });
  }

  render() {
    const { currentLocation, worxs } = this.props;
    const { centerOnGeolocation, currentWorxId } = this.state;

    const worxMarkers = worxs.map( worx => {
      return <Marker 
        key={worx._id} 
        position={worx.location} 
        onClick={() => this.setState({ currentWorxId: worx._id })} 
      />
    });
    return (
      <div id="worx-map">
        <MapLoader>
          <GoogleMap
            defaultZoom={15}
            center={centerOnGeolocation ? currentLocation : undefined}
            options={this.mapOptions()}
            onDragstart={() => this.handleMapDrag()}
          >
            {worxMarkers}
            <GeolocationMarker />
            <CenterMapButton onClick={() => this.handleCenterMapButtonClick()} disabled={centerOnGeolocation} />
          </GoogleMap>
        </MapLoader>
        <NewWorxManager />
        <WorxDetailsManager worxId={ currentWorxId } onWorxDetailsClose={() => this.onWorxDetailsClose()} />
      </div>
    )
  }
}

export default createContainer(mapMeteorToProps, WorxMap);