import React from 'react'
import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import dataURItoBlob from '../../js/shared/data-uri-to-blob'
import getPicture from '../../js/shared/get-picture'
import Worx from '../../../models/worx'
import WorxPhoto from '../../../models/worx-photo'
import {WorxPhotos} from '../../../models/collections'
import NewWorxButton from './new-worx-button'
import NewWorxDialog from './new-worx-dialog'

const mapMeteorToProps = () => {
  return {
    userId: Meteor.userId()
  }
};

class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      worx: null,
      worxPhoto: null,
      dialogOpen: false
    };
  }

  createNewWorx() {
    const {userId} = this.props;

    this.setState({
      worx: new Worx({userId, location: Geolocation.latLng()})
    });

    getPicture().then(pictureURI => {
      this.setState({
        dialogOpen: true,
        pictureURI: pictureURI
      });
    }).catch(error => {
      this.cancelNewWorx();
    });
  }

  saveNewWorx() {
    const {worx, pictureURI} = this.state;
    const {displayNotification} = this.context;

    this.setState({dialogOpen: false});
    worx.save((error) => {
      if (error) {
        this.cancelNewWorx();
        console.log(error);
        displayNotification('There was an error creating your new Worx.');
        return;
      }
      WorxPhotos.resumable.addFile(dataURItoBlob(pictureURI));
    });
  }

  saveNewWorxPhoto(file) {
    const {userId} = this.props;
    const {_id: worxId} = this.state.worx;
    const {displayNotification} = this.context;

    const worxPhoto = new WorxPhoto();

    worxPhoto.set({
      _id: file.uniqueIdentifier,
      contentType: file.file.type,
      'metadata.userId': userId,
      'metadata.worxId': worxId
    });

    worxPhoto.save(error => {
      if (error) {
        this.cancelNewWorx();
        console.log(error);
        displayNotification('There was an error creating your new Worx');
        return;
      }

      WorxPhotos.resumable.upload();
    });
  }

  cancelNewWorx() {
    this.state.worx.remove();
    this.setState({
      dialogOpen: false,
      pictureURI: null,
      worx: null
    });
  }

  componentDidMount() {
    const {displayNotification} = this.context;
    WorxPhotos.resumable.on( 'fileAdded', file => this.saveNewWorxPhoto(file) );
    WorxPhotos.resumable.on( 'fileSuccess', () => displayNotification('Your new Worx was successfully added.') );
    WorxPhotos.resumable.on( 'fileError', (_, message) => {
      this.cancelNewWorx();
      console.log(message);
      displayNotification('There was an error creating your new Worx.')
    });
  }

  render() {
    const {dialogOpen, worx, pictureURI} = this.state;
    const newWorxDialog = dialogOpen ? <NewWorxDialog
      open={dialogOpen}
      worx={worx}
      pictureURI={pictureURI}
      onCancel={ () => this.cancelNewWorx() }
      onDone={ () => this.saveNewWorx() }
    /> : null;

    return (
      <div id="new-worx-manager">
        <NewWorxButton onClick={ () => this.createNewWorx() } />
        {newWorxDialog}
      </div>
    )
  }
}

Component.propTypes = {
  userId: React.PropTypes.string
};

Component.contextTypes = {
  displayNotification: React.PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, Component);