import React from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import Person from 'material-ui/svg-icons/social/person'

const mapMeteorToProps = ({user}) => {
  user = user || Meteor.user();
  return {
    src: user && user.profile.picture
  }
};

const StatelessFunction = ({src, style}) => {
  const props = {
    src,
    icon: src ? null : <Person />,
    style: {
      ...style,
      verticalAlign: 'middle'
    }
  };

  return <Avatar {...props} />;
};

StatelessFunction.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.object
};

export default createContainer(mapMeteorToProps, StatelessFunction);