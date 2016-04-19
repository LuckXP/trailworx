import React from 'react'
import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo'

const mapMeteorToProps = () => {
  return {
    loggedIn: true //Meteor.userId() != null
  }
};

const StatelessFunction = ({loggedIn, onClick}) => {
  return (
    <FloatingActionButton disabled={! loggedIn} onClick={onClick} style={{position: 'absolute', right: 20, bottom: 100}}>
      <ImageAddAPhoto />
    </FloatingActionButton>
  )
};

StatelessFunction.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, StatelessFunction);