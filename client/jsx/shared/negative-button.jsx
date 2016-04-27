import React from 'react'
import AbstractButton from './abstract-button'

class NegativeButton extends AbstractButton {
  getStyle() {
    return {
      borderColor: 'crimson'
    }
  }

  getLabelStyle() {
    return {
      color: 'crimson'
    }
  }
}

export default NegativeButton;