import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemId: props.currentItemId
    };
  }

  onItemChange(newId) {
    if (newId) {
      this.setState({
        currentItemId: newId
      });
      this.props.onCurrentIdChanged(newId);
    }
  }

  render() {
    const {initialText, items} = this.props;
    const {currentItemId} = this.state;
    const menuItems = items.map(item => <MenuItem key={item._id} value={item._id} primaryText={item.displayText} />);

    if (initialText) {
      menuItems.unshift(<MenuItem key="null" value={null} primaryText={initialText} />);
    }

    return (
      <SelectField
        value={currentItemId}
        onChange={(event, index, value) => this.onItemChange(value)}
        style={{width: '100%'}}
      >
        {menuItems}
      </SelectField>
    )
  }
}

Component.propTypes = {
  initialText: React.PropTypes.string,
  currentItemId: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onCurrentIdChanged: React.PropTypes.func.isRequired
};

Component.defaultProps = {
  currentItemId: null
};

export default Component;