import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'
import Dialog from '../shared/dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Comment from '../shared/comment'
import List from 'material-ui/List'
import NewComment from '../shared/new-comment'

const mapMeteorToProps = ({ currentWorxId }) => {
  const worx = currentWorxId ? Worx.findOne(currentWorxId) : null;
  let comments;
  if (worx) {
    comments = worx.getComments().fetch()
  }
  console.log(worx, comments);
  return { worx, comments }
};

class WorxDetailsDialog extends React.Component {

  constructor(props) {
    super(props);
  }

  onCommentPropertyChanged(propertyName, newValue) {
    this.props.worx.set(propertyName, newValue);
    this.forceUpdate();
  }

  isDoneDisabled() {
    const {worx} = this.props;
    return !worx.validate('categoryId');
  }


  render() {
    const {currentWorxId, worx, comments, onRequestClose, ...props} = this.props;

    const actions = <FlatButton label="Close" onClick={() => onRequestClose()} />;

    let photoGallery, commentTags, dialogChildren;
    if (currentWorxId) {
      photoGallery = worx.getWorxPhotos().map( photo => {
        return <img key={photo._id} src={photo.uri} width="100%" />;
      });

      commentTags = comments.map( c => <Comment key={c._id} comment={c} /> );

      dialogChildren = (
        <div>
          <h3>
            { worx.getCategory().name }
          </h3>
          <h4>{`Lat: ${worx.location.lat}, Lng: ${worx.location.lng}`}</h4>
          {photoGallery}
          <List>
            {commentTags}
          </List>

          <NewComment worxId={currentWorxId} />
        </div>
      );
    }

    return (
      <Dialog
        {...{actions}}
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

export default createContainer(mapMeteorToProps, WorxDetailsDialog);
