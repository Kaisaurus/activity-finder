import React, { Component } from 'react';
import './App.css';
import ActivityTypeBtn from './components/ActivityTypeBtn';
import WeatherForecastContainer from './containers/WeatherForecastContainer';
import Typography from 'material-ui/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography type="display1" gutterBottom>
          Activity Finder
        </Typography>
        <ActivityTypeBtn />
        <WeatherForecastContainer />
      </div>
    );
  }
}

export default App;
