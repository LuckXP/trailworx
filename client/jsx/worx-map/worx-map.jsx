'use strict';

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
//import { Geolocation } from 'mdg/mobile-packages'
import styles from '../../stylesheets/map-styles'
import {GoogleMap} from 'react-google-maps'
import MapLoader from '../maps/map-loader'
import GeolocationMarker from '../maps/geolocation-marker'
import CenterMapButton from '../maps/center-map-button'
import NewWorxManager from './../new-worx/new-worx-manager'
import WorxMarkers from './worx-markers'
import WorxInfoWindow from '../worx-info/worx-info-window'
import WorxDetailsDialog from '../worx-details/worx-details-dialog'


const mapMeteorToProps = (props) => {
  return {
    currentLocation: Geolocation.latLng() || { lat: 0, lng: 0 }
  };
};

class WorxMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerOnGeolocation: true,
      currentWorxId: null,
      infoWindowOpen: false,
      detailsDialogOpen: false
    }
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

  handleMapClick() {
    this.setState({
      currentWorxId: null,
      infoWindowOpen: false
    });
  }

  handleCenterMap() {
    this.setState({
      centerOnGeolocation: true
    });
  }

  handleWorxMarkerClick(currentWorxId) {
    this.setState({
      currentWorxId,
      infoWindowOpen: true
    });
  }

  handleViewDetails() {
    this.setState({
      infoWindowOpen: false,
      detailsDialogOpen: true
    });
  }

  handleNewWorxCreated(newWorxId) {
    this.setState({
      currentWorxId: newWorxId
    });
  }

  closeDetailsDialog() {
    this.setState({
      currentWorxId: null,
      detailsDialogOpen: false
    });
  }

  closeInfoWindow() {
    this.setState({
      currentWorxId: null,
      infoWindowOpen: false
    })
  }

  render() {
    const { currentLocation } = this.props;
    const { centerOnGeolocation, currentWorxId, infoWindowOpen, detailsDialogOpen } = this.state;

    return (
      <div id="worx-map">
        <MapLoader>
          <GoogleMap
            defaultZoom={15}
            center={centerOnGeolocation ? currentLocation : undefined}
            options={this.mapOptions()}
            onDragstart={() => this.handleMapDrag()}
            onClick={() => this.handleMapClick()}
          >
            <GeolocationMarker centered={centerOnGeolocation} />
            <CenterMapButton onClick={() => this.handleCenterMap()} disabled={centerOnGeolocation} />
            <WorxMarkers {...{currentWorxId}} onMarkerClick={ worxId => this.handleWorxMarkerClick(worxId) } />
            <WorxInfoWindow currentWorxId={ currentWorxId } open={infoWindowOpen} onRequestClose={() => this.closeInfoWindow()} onRequestDetails={() => this.handleViewDetails()} />
            <WorxDetailsDialog currentWorxId={ currentWorxId } open={detailsDialogOpen} onRequestClose={() => this.closeDetailsDialog()} />
            <NewWorxManager onWorxCreated={newWorxId => this.handleNewWorxCreated(newWorxId)} />
          </GoogleMap>
        </MapLoader>
      </div>
    )
  }
}

export default createContainer(mapMeteorToProps, WorxMap);