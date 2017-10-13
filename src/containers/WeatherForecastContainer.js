import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocWeather } from '../actions/weatherActions';
import WeatherCard from '../components/WeatherCard';
import { Loader } from 'semantic-ui-react';

class WeatherContainer extends React.Component {
  static propTypes = {
    autoFetching: PropTypes.bool.isRequired,
    cityFetching: PropTypes.bool.isRequired,
    city: PropTypes.string,
    country: PropTypes.string,
    weather: PropTypes.object,
  }

  componentWillMount() {
    const { city } = this.props;
    if(!city){
      this.autoFetchWeather();
    }
  }

  autoFetchWeather() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator
        .geolocation
        .getCurrentPosition(
          pos => this.onLocSuccess.bind(this)(pos),
          this.onLocError);
    } else {
      /* geolocation is not available */
      this.onLocError();
    }
  }

  onLocSuccess(pos) {
    const { latitude, longitude } = pos.coords;
    this.props.getLocWeather(latitude, longitude);
  }

  onLocError() {
    console.log('Could not retrieve geoLoc');
  }

  generateWeatherForecast() {
    const { fetchFailed, autoFetching, cityFetching, city, weather, country } = this.props;
    if (fetchFailed) {
      return <p> Failed to fetch weather data... Please try again. </p>
    }
    if (city) {
      return (
        <WeatherCard
          weather={ weather }
          country={ country }
          city={ city }
        />
      );
    } else if (autoFetching) {
      return <p> Auto fetching weather... </p>
    } else if (cityFetching) {
      return <p> Fetching weather </p>
    } else {
      return <p> Auto-location tracking not working, Try search for your city manually </p>
    }
  }

  render() {
    const { autoFetching, cityFetching } = this.props;

    return (
      <div>
        <Loader active={ autoFetching || cityFetching } />
        { this.generateWeatherForecast() }
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  autoFetching: weather.autoFetching,
  cityFetching: weather.cityFetching,
  city: weather.city,
  country: weather.country,
  weather: weather.weather,
  fetchFailed: weather.fetchFailed,
});

export default connect(
  mapStateToProps,
  { getLocWeather }
)(WeatherContainer);