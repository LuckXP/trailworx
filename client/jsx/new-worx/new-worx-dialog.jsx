import React from 'react'
import Dialog from '../shared/dialog'
import PositiveButton from '../shared/positive-button'
import NeutralButton from '../shared/neutral-button'
import CategoryDropDownMenu from './../shared/category-drop-down-menu'
import TextField from 'material-ui/TextField'
import PhotoCard from '../shared/photo-card'

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
        <PhotoCard src={pictureURI} width="100%" overlayText="Create your new Worx" />
        <CategoryDropDownMenu onCurrentIdChanged={newId => this.onWorxPropertyChanged('categoryId', newId)} />
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
            hintText="Description"
            value={worx.description}
            onChange={event => this.onWorxPropertyChanged('description', event.target.value)}
            multiLine={true}
            rows={3}
            style={{
            width: '100%',
            marginTop: -5,
            marginBottom: -5
          }}
          />
        </div>
      </div>
    );

    return (
      <Dialog
        open={open}
        onRequestClose={ onCancel }
        actions={[
          <NeutralButton style={{float: 'left'}} label="Cancel" onClick={ onCancel } />,
          <PositiveButton label="Create Worx" disabled={this.isDoneDisabled()} onClick={ onDone }/>
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