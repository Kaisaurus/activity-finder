import axios from 'axios';
import { apiUrl, headers, urlParams } from '../api-config';
import * as types from './types';

export function getLocWeather(lat, lon) {
  return dispatch => {
    dispatch({ type: types.AUTO_FETCHING_WEATHER });
    axios
      .get(
        `${apiUrl}/forecast?lat=${ lat }&lon=${ lon }${ urlParams }`,
        { headers }
      )
      .then(resp => {
        if (resp.status === 200) {
          dispatch({ type: types.GET_WEATHER_FULFILLED, payload: resp.data });
        } else {
          throw new Error('bad response from API');
        }
      })
      .catch(err => {
        dispatch({ type: types.GET_WEATHER_FAILED, payload: err });
      })
  }
}

export function getCityWeather(city) {
  return dispatch => {
    dispatch({ type: types.CITY_FETCHING_WEATHER });
    axios
      .get(
        `${apiUrl}/weather?q=${ city }${ urlParams }`,
        { headers }
      )
      .then(resp => {
        if(resp.status === 200){
          dispatch({ type: types.GET_CITY_WEATHER_FULFILLED, payload: resp.data });
        } else {
          throw new Error('bad response from API');
        }
      })
      .catch(err => {
        dispatch({ type: types.GET_WEATHER_FAILED, payload: err });
      })
  }
}
