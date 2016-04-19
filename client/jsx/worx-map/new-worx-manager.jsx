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
      worx: new Worx({userId, location: Geolocation.latLng()}),
      worxPhoto: new WorxPhoto({userId})
    });

    getPicture().then(pictureURI => {
      this.state.worxPhoto.setDataUri(pictureURI);
      this.setState({
        dialogOpen: true,
        pictureURI: pictureURI
      });
      console.log(this.state);
    }).catch(error => {
      this.cancelNewWorx();
    });
  }

  saveNewWorx() {
    const {worx, pictureURI} = this.state;
    const {displayNotification} = this.context;

    this.setState({dialogOpen: false});
    worx.save((err) => {
      if (err) {
        console.log(err);
        displayNotification('There was an error saving your worx.');
        return;
      }
      WorxPhotos.resumable.addFile(dataURItoBlob(pictureURI));
    });
  }

  saveNewWorxPhoto(file) {
    console.log(file);
    const {worx, worxPhoto} = this.state;
    const {displayNotification} = this.context;

    worxPhoto.set('_id', file.uniqueIdentifier);
    worxPhoto.set('worxId', worx._id);
    worxPhoto.set('contentType', file.file.type);
    worxPhoto.save((err, id) => {
      if (err) {
        console.log(err);
        displayNotification('There was an error saving your worx photo.');
        return;
      }
      WorxPhotos.resumable.upload();
    });
  }

  componentDidMount() {
    WorxPhotos.resumable.on( 'fileAdded', (file) => this.saveNewWorxPhoto(file) );
  }

  cancelNewWorx() {
    this.setState({
      pictureURI: null,
      dialogOpen: false,
      worx: null,
      worxPhoto: null
    });
  }


  render() {
    const {dialogOpen, worx, worxPhoto} = this.state;
    return (
      <div id="new-worx-manager">
        <NewWorxButton onClick={ () => this.createNewWorx() } />
        <NewWorxDialog 
          open={dialogOpen} 
          worx={worx} 
          worxPhoto={worxPhoto} 
          onCancel={ () => this.cancelNewWorx() } 
          onDone={ () => this.saveNewWorx() }
        />
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