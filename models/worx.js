'use strict';

import {Worxs} from './collections';
import {RiverAccess, RiverInstrument} from './data';
import {MapOptions} from './map/map';

export default Astro.Class({
  name: 'Worx',
  collection: Worxs,
  fields: {
  	location: {
  		lat: 'required,string',
  		lng: 'required,string'
  	}