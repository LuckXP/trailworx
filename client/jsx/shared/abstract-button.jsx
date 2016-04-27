import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class AbstractButton extends React.Component {

  getDefaultStyle() {
    return {
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }

  getStyle() {
    return {}
  }

  getDefaultLabelStyle() {
    return {}
  }

  getLabelStyle() {
    return {}
  }

  combineStyles() {
    return {
      ...this.getDefaultStyle(),
      ...this.getStyle(),
      ...this.props.style
    }
  }

  combineLabelStyles() {
    return {
      ...this.getDefaultLabelStyle(),
      ...this.getLabelStyle(),
      ...this.props.labelStyle
    }
  }

  getBackgroundColor() {
    return 'white'
  }

  render() {
    const {style, labelStyle, ...props} = this.props;
    return <RaisedButton backgroundColor={this.getBackgroundColor()} style={this.combineStyles()} labelStyle={this.combineLabelStyles()} {...props} />;
  }
}

export default AbstractButton;