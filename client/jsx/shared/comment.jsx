import React from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import UserAvatar from './user-avatar'
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardTitle from 'material-ui/Card/CardTitle';
import NegativeButton from './negative-button';
import CardText from 'material-ui/Card/CardText';

const mapMeteorToProps = ({comment}) => {
  return {
    loggedIn: Meteor.userId() === comment.userId
  }

}

const Comment = ({comment, loggedIn, handleDeleteComment}) => {
  const user = comment.getUser();
  const deleteButtonDisplay = loggedIn ?  <NegativeButton label="Delete" onClick={ () => handleDeleteComment(comment) } /> : null;

  return (
    <Card style={{
      marginBottom: 10
    }}>
      <CardHeader
        title={ user.profile.name }
        subtitle={ comment.createdAt.toString().substr(0, 15) }
        avatar={ <UserAvatar user={ user } /> }
      />

      <CardText>
        {comment.body}
      </CardText>
      <CardActions>
        {deleteButtonDisplay}
      </CardActions>
    </Card>

  )
};

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired

};

export default createContainer(mapMeteorToProps, Comment);







