import axios from 'axios';
import { api, headers, key } from '../api-config';
import * as types from './types';

export function getLocWeather(lat, lon) {
  return dispatch => {
    dispatch({ type: types.FETCHING_WEATHER });
    axios
      .get(
        `${api}/forecast?lat=${ lat }&lon=${ lon }&APPID=${ key }`,
        { headers }
      )
      .then(resp => {
        if(resp.data.cod === "200"){
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
