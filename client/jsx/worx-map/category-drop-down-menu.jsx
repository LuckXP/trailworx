import React from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Category from '../../../models/category'
import DropDownMenu from '../shared/drop-down-menu'

const mapMeteorToProps = ({currentCategoryId, onCategoryIdChanged}) => {
  const categories = Category.find().fetch();
  const items = categories.map( ({_id, name}) => ({_id, displayText: name}) );

  return {
    initialText: '-- Worx Category --',
    items
  }
};

export default createContainer(mapMeteorToProps, DropDownMenu);