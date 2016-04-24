import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import WorxMarker from './worx-marker'
import Worx from '../../../models/worx'

const mapMeteorToProps = () => {
  return {
    worxs: Worx.find().fetch()
  }
};

const StatelessFunction = ({worxs, onMarkerClick: onClick, ...props}) => {
  return (
    <div id="worx-markers">
      {worxs.map( worx => <WorxMarker key={worx._id} {...{worx, onClick}} {...props} /> )}
    </div>
  )
};

StatelessFunction.propTypes = {
  worxs: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  currentWorxId: PropTypes.string,
  onMarkerClick: PropTypes.func.isRequired
};

export default createContainer(mapMeteorToProps, StatelessFunction);