import React from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import UserAvatar from './user-avatar'
import IconButton from 'material-ui/IconButton'
import ListItem from 'material-ui/List/ListItem';

const Comment = ({comment}) => {
  const user = comment.getUser();
  return (
    <ListItem
      disabled={true}
      leftAvatar={
        <UserAvatar user={ user } />
      }
    >
      {user.profile.name}
      {comment.body}
      {comment.createdAt}
      <IconButtton />
    </ListItem>

  )
};

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired

};

export default Comment;