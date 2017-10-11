import React from 'react';
import Switch from 'material-ui/Switch';

class ActivityTypeBtn extends React.Component {
  state = {
    active: true,
  };

  handleChange = name => (event, value) => {
    this.setState({ [name]: value });
  };

  render(){
    return (
      <div>
        Relaxed
        <Switch
          checked={this.state.active}
          onChange={this.handleChange('active')}
          aria-label="active"
        />
        Active
      </div>
    )
  }
}

export default ActivityTypeBtn;