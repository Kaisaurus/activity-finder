import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { TimeConverter } from '../utils/TimeConverter';

const WeatherCard = (props) => {
  const { temp, temp_min, temp_max, pressure, humidity } = props.weather.main;
  const { speed, deg } = props.weather.wind;
  const { main, description, icon } = props.weather.weather[0];
  const { city, country } = props;
  const dateTime = TimeConverter(props.weather.dt);

  return (
    // this styling is a quick fix to get the card in the middle
    <Card style={ {margin: '1em auto'} }>
      <Card.Content>
        <Card.Description content={ `${ city }, ${ country }` } />
        <Card.Description content={ dateTime } />
      </Card.Content>
      <Card.Content>
        <Card.Description
          content={ main }
        />
        <Card.Meta
          content={ description }
        />
        { generateIcon(icon, description) }
        <Card.Header>
          { temp }&deg;C
        </Card.Header>
        <Card.Meta>
          min:{ temp_min }&deg;C max:{ temp_max }&deg;C
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          Wind { speed }m/s { windDegToDirection(deg) }
        </Card.Meta>
        <Card.Meta>
          Humidity { humidity }% Pressure { pressure }hPa
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

function windDegToDirection(deg) {
  const val = Math.round(deg);
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE','SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[(val % directions.length)];
}

function generateIcon(icon, description) {
  return (
    <Image
      src={`http://openweathermap.org/img/w/${ icon }.png`}
      alt={ description }
    />
  )
}

export default WeatherCard;