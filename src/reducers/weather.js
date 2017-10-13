import * as types from '../actions/types';

const defaultState = {
  weather: null,
  autoFetching: false,
  cityFetching: false,
  city: null,
  country: null,
  list: null,
  code: null,
};

const weather = (state = defaultState, action) => {
  switch (action.type) {
  case types.AUTO_FETCHING_WEATHER:
    return {
      ...state,
      fetchFailed: false,
      autoFetching: true,
    }
  case types.CITY_FETCHING_WEATHER:
    return {
      ...state,
      fetchFailed: false,
      cityFetching: true,
    }
  case types.GET_WEATHER_FULFILLED:
    const { name, country } = action.payload.city;
    return {
      ...state,
      autoFetching: false,
      cityFetching: false,
      city: name,
      country,
      weather: action.payload.list[0],
      code: action.payload.list[0].weather[0].id,
    }
  case types.GET_CITY_WEATHER_FULFILLED:
    return {
      ...state,
      autoFetching: false,
      cityFetching: false,
      city: action.payload.name,
      country: action.payload.sys.country,
      weather: action.payload,
      code: action.payload.weather[0].id,
    }
  case types.GET_WEATHER_FAILED:
    return {
      ...state,
      autoFetching: false,
      cityFetching: false,
      fetchFailed: true,
    }
  default:
    return state;
  }
};

export default weather;
