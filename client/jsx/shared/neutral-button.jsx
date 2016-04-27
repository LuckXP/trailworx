import React from 'react'
import AbstractButton from './abstract-button'

class NeutralButton extends AbstractButton {
  getStyle() {
    return {
      borderColor: 'darkgray'
    }
  }

  getLabelStyle() {
    return {
      color: 'darkgray'
    }
  }
}

export default NeutralButton;