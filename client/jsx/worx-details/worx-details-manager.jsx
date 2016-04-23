import React from 'react'
import {createComponent} from 'meteor/react-meteor-data'
import WorxDetailsDialog from './worx-details-dialog'
import {createContainer} from 'meteor/react-meteor-data'
import Worx from '../../../models/worx'

const mapMeteorToProps = ({ worxId }) => {
  return {
    worx: worxId ? Worx.findOne(worxId) : null
  }
};

class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {worx, worxId, onWorxDetailsClose} = this.props;
    return worxId ? <WorxDetailsDialog worx={worx} onRequestClose={onWorxDetailsClose} /> : null;
  }
}

Component.propTypes = {

};

export default createContainer(mapMeteorToProps, Component);