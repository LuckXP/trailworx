import React from 'react'
import AbstractButton from './abstract-button'

class PositiveButton extends AbstractButton {
  getStyle() {
    return {
      border: 'none'
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