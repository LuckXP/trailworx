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

const mapMeteorToProps = ({ currentWorxId }) => {
  let meteorProps = {};
  if (currentWorxId) {
    const worx = Worx.findOne(currentWorxId);
    meteorProps = {
      isLoggedIn: Meteor.userId() != null,
      isOwner: Meteor.userId() === worx.userId,
      worx,
      category: worx.getCategory().name,
      comments: worx.getComments().fetch(),
      photos: worx.getWorxPhotos().fetch()
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

    if (window.confirm('Are you sure?')) {
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

  render() {
    const {currentWorxId, isLoggedIn, isOwner, worx, category, comments, photos, onRequestClose, ...props} = this.props;

    let dialogChildren, deleteButton;
    if (worx) {
      const photoCards = photos.map( photo => {
        return <PhotoCard key={photo._id} src={photo.uri} overlayText={category} width="100%" />;
      });

      const commentTags = comments.map( c => <Comment key={c._id} comment={c} /> );

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
