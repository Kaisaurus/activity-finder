import * as types from '../actions/types';

const defaultState = {
  weather: null,
  fetching: false,
  city: null,
  country: null,
};

const weather = (state = defaultState, action) => {
  switch (action.type) {
  case types.FETCHING_WEATHER:
    return {
      ...state,
      fetching: true
    }
  case types.GET_WEATHER_FULFILLED:
    const { name, country } = action.payload.city;
    return {
      ...state,
      fetching: false,
      city: name,
      country,
      weather: action.payload.list,
    }
  case types.GET_WEATHER_FAILED:
    return {
      ...state,
      fetching: false,
    }
  default:
    return state;
  }
};

export default weather;
