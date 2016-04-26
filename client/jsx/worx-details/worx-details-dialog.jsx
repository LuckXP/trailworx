import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'
import Dialog from '../shared/dialog'
import RaisedButton from 'material-ui/RaisedButton'
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

  onCommentPropertyChanged(propertyName,newValue) {
    this.props.worx.set(propertyName,newValue);
    this.forceUpdate();
  }

  isDoneDisabled() {
    const {worx} = this.props;
    return ! worx.validate('categoryId');
  }

  render() {
    const {worx, onRequestClose, ...props} = this.props;

    let dialogChildren;
    if (worx) {
      const photoGallery = worx.getWorxPhotos().map(worxPhotoObject => {
        return <img src={worxPhotoObject.uri} width="100%"/>;
      });

      const comments = worx.comments.map(oneComment => <Comment comment={oneComment}/>);

      dialogChildren = (
        <div id="worx-details-dialog">
          <h3 style={{textAlign: 'center'}}>
            { worx.getCategory().name }
          </h3>
          {photoGallery}
          {photoGallery}
          {photoGallery}
          {photoGallery}
          <List>
            {comments}
          </List>
        </div>
      );
    }

    return (
      <Dialog
        actions={<RaisedButton label="Close" onClick={() => onRequestClose()}/>}
        {...props}
      >
        {worx && dialogChildren}
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
