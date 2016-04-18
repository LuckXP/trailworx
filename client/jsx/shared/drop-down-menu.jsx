import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemId: props.currentItemId
    };
    console.log('drop-down-menu');
    console.log(props);
  }

  onMenuItemChange(newId) {
    this.setState({
      currentItemId: newId
    });
    this.props.onCurrentIdChanged(newId);
  }

  render() {
    const {defaultPrimaryText, items} = this.props;
    const {currentItemId} = this.state;
    const menuItems = items.map(item => <MenuItem key={item._id} value={item._id} primaryText={item.displayText} />);

    if (defaultPrimaryText) {
      menuItems.unshift(<MenuItem value={null} primaryText={defaultPrimaryText} />);
    }

    return (
      <SelectField
        disabled={false}
        value={currentItemId}
        onChange={(event, index, value) => this.onMenuItemChange(value)}
        style={{position: 'absolute', top: 200, zIndex: 10000}}
      >
        {menuItems}
      </SelectField>
    )
  }
}

Component.propTypes = {
  defaultPrimaryText: React.PropTypes.string,
  currentItemId: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onCurrentIdChanged: React.PropTypes.func.isRequired
};

Component.defaultProps = {
  currentItemId: null
};

export default Component;