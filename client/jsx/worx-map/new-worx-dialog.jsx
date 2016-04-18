import React from 'react'
import CategoryDropDownMenu from './category-drop-down-menu'

const StatelessFunction = (props) => {
  return (
    <CategoryDropDownMenu onCurrentIdChanged={(newId) => this.setState(newId)} />
  );
};

StatelessFunction.propTypes = {

};

export default StatelessFunction;