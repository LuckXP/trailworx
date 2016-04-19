import React from 'react'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import CategoryDropDownMenu from './category-drop-down-menu'
import TextField from 'material-ui/TextField'

class Component extends React.Component {

  constructor(props) {
    super(props);
  }

  onWorxPropertyChanged(propertyName, newValue) {
    this.props.worx.set(propertyName, newValue);
    console.log(this.props.worx);
    this.forceUpdate();
  }

  isDoneDisabled() {
    const {worx} = this.props;
    return !worx.validate('categoryId');
  }

  render() {
    const {open, worx, worxPhoto, onDone, onCancel} = this.props;
    if(!open) {
      return null;
    }

    console.log(worx.getValidationErrors());

    return (
      <Dialog
        open={open}
        modal={true}
        title="Add a Worx"
        actions={[

      ]}
      >
        <img src={worxPhoto.uri} height="300px"/>
        <CategoryDropDownMenu onCurrentIdChanged={newId => this.onWorxPropertyChanged('categoryId', newId)} />
        <TextField hintText="Description" value={worx.description} onChange={event => this.onWorxPropertyChanged('description', event.target.value)} />
        <br />
        <RaisedButton label="Done" disabled={this.isDoneDisabled()} onClick={ onDone }/>
        <RaisedButton label="Cancel" onClick={ onCancel } />
      </Dialog>
    );
  }
}

Component.propTypes = {
  worxPhoto: React.PropTypes.object.isRequired,
  worx: React.PropTypes.object.isRequired,
  open: React.PropTypes.bool.isRequired,
  onDone: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};

export default Component;