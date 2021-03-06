import {default as React, PropTypes} from 'react'
import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo'
import AddWorxIcon from './addworxsvg'

const mapMeteorToProps = () => {
  return {
    loggedIn: Meteor.userId() != null,
    hasLocation: Geolocation.latLng() != null
  }
};

const StatelessFunction = ({loggedIn, hasLocation, onClick}) => {
  return (
    <FloatingActionButton
      disabled={! loggedIn || ! hasLocation}
      onClick={onClick}
      style={{position: 'absolute', right: 20, bottom: 100, zIndex: 1}}>
      <AddWorxIcon viewBox={ '10 7 21 26' } />
    </FloatingActionButton>
  )
};

StatelessFunction.propTypes = {
  hasLocation: React.PropTypes.bool.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, StatelessFunction);