import React from 'react'
import AbstractButton from './abstract-button'

class NeutralButton extends AbstractButton {
  getStyle() {
    return {
      borderColor: 'black'
    }
  }

  getLabelStyle() {
    return {
      color: 'black'
    }
  }
}

export default NeutralButton;