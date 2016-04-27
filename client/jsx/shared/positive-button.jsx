import React from 'react'
import AbstractButton from './abstract-button'

class PositiveButton extends AbstractButton {
  getStyle() {
    return {
      borderColor: '#42A5F5',
      borderWidth: 1
    }
  }

  getLabelStyle() {
    return {
      color: 'white'
    }
  }

  getBackgroundColor() {
    return '#42A5F5';
  }
}

export default PositiveButton;