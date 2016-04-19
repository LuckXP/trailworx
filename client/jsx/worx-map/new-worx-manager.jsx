import React from 'react'
import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import dataURItoBlob from '../../js/shared/data-uri-to-blob'
import getPicture from '../../js/shared/get-picture'
import Worx from '../../../models/worx'
import WorxPhoto from '../../../models/worx-photo'
import NewWorxButton from './new-worx-button'
import NewWorxDialog from './new-worx-dialog'

const mapMeteorToProps = () => {
  return {
    userId: Meteor.userId()
  }
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worx: null,
      worxPhoto: null,
      dialogOpen: false
    };
  }

  createNewWorx() {
    const {userId} = this.props;

    this.setState({
      worx: new Worx({userId}),
      worxPhoto: new WorxPhoto({userId})
    });

    getPicture().then(pictureURI => {
      this.state.worxPhoto.setDataUri(pictureURI);
      this.setState({
        dialogOpen: true
      });
      console.log(this.state);
    }).catch(error => {
      this.setState({
        pictureURI: null,
        dialogOpen: false
      });
      console.log(error);
    });
  }

  render() {
    const {dialogOpen, worx, worxPhoto} = this.state;
    return (
      <div id="new-worx-manager">
        <NewWorxButton onClick={() => this.createNewWorx() } />
        <NewWorxDialog open={dialogOpen} worx={worx} worxPhoto={worxPhoto} />
      </div>
    )
  }
}

Component.propTypes = {
  userId: React.PropTypes.string
};

export default createContainer(mapMeteorToProps, Component);