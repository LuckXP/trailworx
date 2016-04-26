import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import FlatButton from 'material-ui/FlatButton'
import Comment from '../../../models/comment'
import TextField from 'material-ui/TextField'

const mapMeteorToProps = (props) => {
  return {
    userId: Meteor.userId()
  }
};

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comment: null};
  }

  componentWillMount() {
    console.log('component will mount')
    this.initEmptyComment();
  }

  onCommentPropertyChanged(propertyName, newValue) {
    this.state.comment.set(propertyName, newValue);
    this.forceUpdate();
  }

  initEmptyComment() { 
    const {userId} = this.props;
    const {worxId} = this.props;
  
    this.setState({
      comment: new Comment({userId, worxId})
    });
  }

  saveNewComment() {
    const {comment} = this.state;
    const {displayNotification} = this.context;
    
    comment.save((error, id) => {
      if (error) {
        this.cancelNewComment();
        console.log(error);
        displayNotification('There was an error adding your comment.');
        return;
      }
      this.initEmptyComment();
      displayNotification('Added new Comment!');
    });
  }

  cancelNewComment() {
    this.state.comment.remove();
    this.initEmptyComment();
  }

  render() {

    const {comment} = this.state;
      
    return (
      <div id="new-comment">
        <TextField 
          hintText="Add Comment" 
          value={comment.body}
          onChange={event => this.onCommentPropertyChanged('body', event.target.value)}
        />
        <FlatButton label="Cancel" onClick={() => this.cancelNewComment()} />
        <FlatButton label="Add Comment" onClick={() => this.saveNewComment()} />
      </div>
    );
  }
}

NewComment.propTypes = {
  userId: PropTypes.string,
  worxId: PropTypes.string
};

NewComment.contextTypes = {
  displayNotification: React.PropTypes.func.isRequired
};


export default createContainer(mapMeteorToProps, NewComment);