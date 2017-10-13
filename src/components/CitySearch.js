import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCityWeather } from '../actions/weatherActions';
import { Form } from 'semantic-ui-react';

class CitySearch extends Component {
  static propTypes = {
    getCityWeather: PropTypes.func.isRequired,
    cityFetching: PropTypes.bool.isRequired,
  }

  state = {
    cityName: '',
  }

  handleChange = e => {
    this.setState({
      cityName: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { cityName } = this.state;
    this.props.getCityWeather(cityName);
  }

  render() {
    const { cityFetching } = this.props;
    return (
      <Form
        onSubmit={ this.handleSubmit }
        className="center aligned grid">
        {/* these classNames are a work around to get it the form centered... */}
        <Form.Group>
          <Form.Input
            required
            name="cityName"
            id="cityName"
            onChange={ this.handleChange }
            disabled={ cityFetching }
            placeholder={ "Search any city name" }
          />
          <Form.Button
            type="submit"
            content="Search"
            disabled={ cityFetching }
          />
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  cityFetching: weather.cityFetching,
});

export default connect(
  mapStateToProps,
  { getCityWeather }
)(CitySearch);