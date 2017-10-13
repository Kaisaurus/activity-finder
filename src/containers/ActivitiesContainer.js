import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Activities } from '../components/Activities';
import { Header, Icon } from 'semantic-ui-react'
import { ActivityTypeBtn } from '../components/ActivityTypeBtn';

class ActivitiesContainer extends React.Component {
  static propTypes = {
    code: PropTypes.number,
  }

  state = {
    active: true,
  }

  findActivity(code) {
    const { active } = this.state;
    return Activities.find(a => {
      return a.code === Math.floor(code / 100) && a.active === active;
    });
  }

  generateActivities(code) {
    if (code) {
      const activity = this.findActivity(code);
      return activity
        ? (
          <Header as='h2' icon textAlign='center'>
            <Icon name={ activity.icon } size="massive" circular />
            <Header.Content>
              Isn't it great weather to go { activity.title } today?
            </Header.Content>
          </Header>
        )
        : <p>Woops.. something went wrong finding that activity</p>
    }
    return <p>Please select a city to see any activities.</p>;
  }

  setActive = active => {
    this.setState({ active });
  }

  render() {
    const { code } = this.props;
    const { active } = this.state;

    return (
      <div>
        <ActivityTypeBtn setActive={ this.setActive } active={ active } />
        { this.generateActivities(code) }
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  code: weather.code,
});

export default connect(
  mapStateToProps
)(ActivitiesContainer);