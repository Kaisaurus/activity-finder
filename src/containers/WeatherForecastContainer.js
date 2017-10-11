import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocWeather } from '../actions/weatherActions';

class WeatherContainer extends React.Component {
  static propTypes = {
    weather: PropTypes.array,
    fetching: PropTypes.bool,
  }

  componentWillMount() {
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
      // api.openweathermap.org/data/2.5/forecast?id={city ID}&APPID={config.OpenWeatherMapAPIKey}
    }
  }

  onLocSuccess(pos){
    const { latitude, longitude } = pos.coords;
    this.props.getLocWeather(latitude, longitude);

    // fetch(`api.openweathermap.org/data/2.5/forecast?lat=${longitude}&lon=${latitude}&APPID=${config.OpenWeatherMapAPIKey}`)
    //   .then(resp => console.log(resp));
  }

  onLocError(){
    console.log('meh');
  }

  render() {
    return (
      <div>
        boo
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  fetching: weather.fetching,
  weather: weather.weather,
});

export default connect(
  mapStateToProps,
  { getLocWeather }
)(WeatherContainer);