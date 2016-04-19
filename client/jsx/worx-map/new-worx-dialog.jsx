import React from 'react'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import CategoryDropDownMenu from './category-drop-down-menu'

class Component extends React.Component {

  constructor(props) {
    super(props);
  }

  onCurrentIdChanged(newId) {
    this.props.worx.set('categoryId', newId);
    this.forceUpdate();
  }

  render() {
    const {open, worx, worxPhoto} = this.props;

    return (
      <Dialog
        open={open}
        modal={true}
        title="Add a Worx"
        actions={[

      ]}
      >
        <img src={worxPhoto.uri} height="300px"/>
        <CategoryDropDownMenu onCurrentIdChanged={this.onCurrentIdChanged} />
        <RaisedButton label="Done" disabled={!worx.validate()} />
      </Dialog>
    );
  }
}

Component.propTypes = {
  open: React.PropTypes.bool.isRequired
};

export default Component;