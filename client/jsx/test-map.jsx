'use strict';

import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps'
import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader'
import mapStyles from '../stylesheets/map-styles'

export default (props) => {
  return (
    <ScriptjsLoader
      hostname={"maps.googleapis.com"}
      pathname={"/maps/api/js"}
      query={ {
        v: 3.24,
        key: 'AIzaSyCJOQ7p5zAjGdDLFJqqbzTDUq-5gYreOS4',
        libraries: "geometry,drawing,places"
      } }
      loadingElement={
        <div>
          Loading
        </div>
      }

      containerElement={
        <div id="google-map-container" />
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={3}
          defaultCenter={{lat: -25.363882, lng: 131.044922}}
          options={{styles: mapStyles}}
        >
          <Marker position={ {lat: -25.363882, lng: 131.044922} } onClick={() => alert('hello world')} />
        </GoogleMap>
      }
    />
  )
}