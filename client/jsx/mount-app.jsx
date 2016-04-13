'use strict';

import React from 'react';
import {mount} from 'react-mounter';
//import store from './../flux/store'
import App from './app';

Meteor.startup(() => {
  mount(App);
//  mount(App, { store });
});
