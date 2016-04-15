import React from 'react'
import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader'

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
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </div>
      }

      containerElement={
        <div id="google-map-container" />
      }
      googleMapElement={ props.children }
    />
  )
}
