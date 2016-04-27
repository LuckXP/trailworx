import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Comment from '../../../models/comment'
import TextField from 'material-ui/TextField'
import PositveButton from '../shared/positive-button'

const mapMeteorToProps = (props) => {
  return {
    userId: Meteor.userId()
  }
};

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    };
  }

  componentWillMount() {
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
        console.log(error);
        this.cancelNewComment();
        displayNotification('Error adding comment.');
      } else {
        this.initEmptyComment();
        displayNotification('Added new Comment!');
      }
    });
  }

  cancelNewComment() {
    this.state.comment.remove();
    this.initEmptyComment();
  }

  render() {

    const {comment} = this.state;

    return (
      <div id="new-comment" style={{
        width: '100%',
        boxSizing: 'border-box',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'darkgray',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        textAlign: 'right'
      }}>
        <TextField
          hintText="Add Comment"
          value={comment.body}
          onChange={event => this.onCommentPropertyChanged('body', event.target.value)}
          multiLine={true}
          rows={3}
          style={{
            width: '100%',
            marginTop: -5,
            marginBottom: -5
          }}
        />
        <PositveButton label="Add Comment" onClick={() => this.saveNewComment()} />
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