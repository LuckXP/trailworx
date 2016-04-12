'use strict';

import {Worxs} from './collections'
import LatLng from './map/lat-lng'

export default Astro.Class({
  name: 'Worx',
  collection: Worxs,
  fields: {
  	location: {
      type: 'object',
      nested: 'LatLng',
      simpleValidator: 'required'
    }
