import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'
import Dialog from '../shared/dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Comment from '../shared/comment'
import List from 'material-ui/List';

const mapMeteorToProps = ({ currentWorxId }) => {
  return {
    worx: currentWorxId ? Worx.findOne(currentWorxId) : null
  }
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
    const {worx, onRequestClose} = this.props;
    const photoGallery = worx && worx.getWorxPhotos().map( worxPhotoObject => {
      return <img src={worxPhotoObject.uri} width="100%" />;
    });
    const comments = worx && worx.comments.map( oneComment => <Comment comment={oneComment} /> );
    const title = worx && `Lat: ${worx.location.lat}, Lng: ${worx.location.lng}`;
    const actions = <FlatButton label="Close" onClick={() => onRequestClose()} />;

    const dialogChildren = worx && (
       <div>
        <h3>
          { worx.getCategory().name }
        </h3>
         {photoGallery}
         <List>
          {comments}
         </List>
       </div>
    );

    return (
      <Dialog
        {...{title, actions}}
        {...this.props}
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
