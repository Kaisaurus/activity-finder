import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import WeatherForecastContainer from './containers/WeatherForecastContainer';
import CitySearch from './components/CitySearch';
import { Container, Grid } from 'semantic-ui-react';
import ActivitiesContainer from './containers/ActivitiesContainer';
import { ActivitiesTable } from './components/ActivitiesTable';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Navigation />
        <Route exact path="/activities" component={ ActivitiesTable } />
        <Route exact path="/" render={
          props =>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <ActivitiesContainer />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <WeatherForecastContainer />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <CitySearch />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        } />
      </Container>
    );
  }
}

export default App;
