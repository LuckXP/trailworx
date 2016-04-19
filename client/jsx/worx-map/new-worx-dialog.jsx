import React from 'react'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import CategoryDropDownMenu from './category-drop-down-menu'

const StatelessFunction = ({open, worx, worxPhoto}) => {
  if (! open) return null;

  return (
    <Dialog
      open={open}
      modal={true}
      title="Add a Worx"
      actions={[

      ]}
    >
      <img src={worxPhoto.uri} width="100%"/>
      <CategoryDropDownMenu onCurrentIdChanged={(newId) => console.log(newId)} />
    </Dialog>
  );
};

StatelessFunction.propTypes = {
  open: React.PropTypes.bool.isRequired
};

export default StatelessFunction;