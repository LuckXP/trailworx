import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'
import Dialog from '../shared/dialog'
import PhotoCard from '../shared/photo-card'
import NeutralButton from '../shared/neutral-button'
import NegativeButton from '../shared/negative-button'
import Comment from '../shared/comment'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import NewComment from '../shared/new-comment'

const mapMeteorToProps = ({ currentWorxId, onRequestClose }) => {
  let meteorProps = {};
  if (currentWorxId) {
    const worx = Worx.findOne(currentWorxId);
    if (worx) {
      meteorProps = {
        isLoggedIn: Meteor.userId() != null,
        isOwner: Meteor.userId() === worx.userId,
        owner: Meteor.users.findOne(worx.userId),
        worx,
        category: worx.getCategory().name,
        comments: worx.getComments().fetch(),
        photos: worx.getWorxPhotos().fetch()
      }
    } else {
      onRequestClose();
    }
  }
  return meteorProps;
};

class WorxDetailsDialog extends React.Component {

  onCommentPropertyChanged(propertyName,newValue) {
    this.props.worx.set(propertyName,newValue);
    this.forceUpdate();
  }

  isDoneDisabled() {
    const {worx} = this.props;
    return ! worx.validate('categoryId');
  }

  handleDeleteWorx() {
    const {worx, onRequestClose} = this.props;
    const {displayNotification} = this.context;

    if (window.confirm('Are you sure you want to delete this Worx?')) {
      worx.remove(error => {
        if (error) {
          console.log(error);
          displayNotification('There was an error deleting the Worx');
        } else {
          displayNotification('Worx deleted.');
        }
      });
      onRequestClose();
    }
  }

  handleDeleteComment(comment) {
    const {displayNotification} = this.context;
    console.log('this is from handleDeletComment', comment);
    if (window.confirm('Are you sure you want to delete this comment?')) {
      comment.remove(error => {
        if (error) {
          console.log(error);
          displayNotification('There was an error deleting the your comment');
        } else {
          displayNotification('comment deleted.');
        }
      });
    }
  }

  render() {
    const {currentWorxId, isLoggedIn, isOwner, worx, category, comments, photos, onRequestClose, owner, ...props} = this.props;

    if (!currentWorxId || !worx) {
      return null;
    }

    let dialogChildren, deleteButton;
    if (worx) {
      const photoCards = photos.map( photo => {
        return <PhotoCard key={photo._id} src={photo.uri} overlayText={category} width="100%" description={ worx.description } creator={ owner } worx={ worx } />;
      });

      const commentTags = comments.map( c => <Comment key={c._id} comment={c} handleDeleteComment={ () => this.handleDeleteComment(c) } /> );

      const newComment = isLoggedIn ? <NewComment worxId={currentWorxId} /> : null;

      deleteButton = isOwner ? <NegativeButton
        label="Delete Worx"
        style={{float: 'left'}}
        onClick={ () => this.handleDeleteWorx() }
      /> : null;

      dialogChildren = (
        <div>
          {photoCards}
          <List>
            {commentTags}
          </List>

          {newComment}
        </div>
      );
    }

    return (
      <Dialog
        actions={[
          deleteButton,
          <NeutralButton label="Close" onClick={() => onRequestClose()}/>
        ]}
        {...props}
      >
        {dialogChildren}
      </Dialog>
    )
  }
}

WorxDetailsDialog.propTypes = {
  worx: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

WorxDetailsDialog.contextTypes = {
  displayNotification: PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, WorxDetailsDialog);
