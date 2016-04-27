import React from 'react'
import Dialog from '../shared/dialog'
import RaisedButton from 'material-ui/RaisedButton'
import CategoryDropDownMenu from './../shared/category-drop-down-menu'
import TextField from 'material-ui/TextField'

class NewWorxDialog extends React.Component {

  constructor(props) {
    super(props);
  }

  onWorxPropertyChanged(propertyName, newValue) {
    this.props.worx.set(propertyName, newValue);
    this.forceUpdate();
  }

  isDoneDisabled() {
    const {worx} = this.props;
    return !worx || !worx.validate('categoryId');
  }

  render() {
    const {open, worx, pictureURI, onDone, onCancel} = this.props;

    const dialogChildren = worx && (
      <div>
        <img src={pictureURI} width="100%"/>
        <CategoryDropDownMenu onCurrentIdChanged={newId => this.onWorxPropertyChanged('categoryId', newId)} />
        <TextField
          hintText="Description"
          value={worx.description}
          onChange={event => this.onWorxPropertyChanged('description', event.target.value)}
        />
      </div>
    );

    return (
      <Dialog
        open={open}
        title="Add a Worx"
        onRequestClose={ onCancel }
        actions={[
          <RaisedButton label="Done" disabled={this.isDoneDisabled()} onClick={ onDone }/>,
          <RaisedButton label="Cancel" onClick={ onCancel } />
        ]}
      >
        {dialogChildren}
      </Dialog>
    );
  }
}

NewWorxDialog.propTypes = {
  open: React.PropTypes.bool.isRequired,
  worx: React.PropTypes.object,
  pictureURI: React.PropTypes.string,
  onDone: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
};

export default NewWorxDialog;