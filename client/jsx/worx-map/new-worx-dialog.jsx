import React from 'react'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import CategoryDropDownMenu from './category-drop-down-menu'
import TextField from 'material-ui/TextField'

class Component extends React.Component {

  constructor(props) {
    super(props);
  }

  onCurrentIdChanged(newId) {
    this.props.worx.set('categoryId', newId);
    this.forceUpdate();
  }

  onCurrentDescriptionChange(desc) {
    this.props.worx.set('description', desc);
    this.forceUpdate();
  }

  render() {
    const {open, worx, worxPhoto} = this.props;
    if(!open) {
      return null;
    }
    return (
      <Dialog
        open={open}
        modal={true}
        title="Add a Worx"
        actions={[

      ]}
      >
        <img src={worxPhoto.uri} height="300px"/>
        <CategoryDropDownMenu onCurrentIdChanged={newId => this.onCurrentIdChanged(newId)} />
        <TextField hintText="Description" onCurrentDescriptionChange={desc => this.onCurrentDescriptionChange(desc)} />
        <br />
        <RaisedButton label="Done" disabled={!worx.validate()} />
      </Dialog>
    );
  }
}

Component.propTypes = {
  open: React.PropTypes.bool.isRequired
};

export default Component;