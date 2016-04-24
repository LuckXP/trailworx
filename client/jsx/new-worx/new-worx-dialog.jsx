import React from 'react'
import Dialog from '../shared/dialog'
import RaisedButton from 'material-ui/RaisedButton'
import CategoryDropDownMenu from './../shared/category-drop-down-menu'
import TextField from 'material-ui/TextField'

class Component extends React.Component {

  constructor(props) {
    super(props);
  }

  onWorxPropertyChanged(propertyName, newValue) {
    this.props.worx.set(propertyName, newValue);
    this.forceUpdate();
  }

  isDoneDisabled() {
    const {worx} = this.props;
    return !worx.validate('categoryId');
  }

  render() {
    const {open, worx, pictureURI, onDone, onCancel} = this.props;

    return (
      <Dialog
        open={open}
        modal={true}
        title="Add a Worx"
        actions={[
          <RaisedButton label="Done" disabled={this.isDoneDisabled()} onClick={ onDone }/>,
          <RaisedButton label="Cancel" onClick={ onCancel } />
        ]}
      >
        <img src={pictureURI} height="300px"/>
        <CategoryDropDownMenu onCurrentIdChanged={newId => this.onWorxPropertyChanged('categoryId', newId)} />
        <TextField hintText="Description" value={worx.description} onChange={event => this.onWorxPropertyChanged('description', event.target.value)} />
      </Dialog>
    );
  }
}

Component.propTypes = {
  open: React.PropTypes.bool.isRequired,
  worx: React.PropTypes.object.isRequired,
  pictureURI: React.PropTypes.string.isRequired,
  onDone: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
};

export default Component;