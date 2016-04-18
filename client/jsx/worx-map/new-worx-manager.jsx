import React from 'react'
import dataURItoBlob from '../../js/shared/data-uri-to-blob'
import getPicture from '../../js/shared/get-picture'
import NewWorxButton from './new-worx-button'
import NewWorxDialog from './new-worx-dialog'

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureURI: null,
      dialogOpen: false
    };
  }

  createNewWorx() {
    getPicture(pictureURI => {
      this.setState({pictureURI, dialogOpen: true});
      console.log(this.state);
    });
  }

  render() {
    return (
      <div id="new-worx-manager">
        <NewWorxButton onClick={() => this.createNewWorx() } />
        <NewWorxDialog open={this.state.dialogOpen} />
      </div>
    )
  }
}

Component.propTypes = {

};

export default Component;