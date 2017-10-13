export const apiUrl = 'http://api.openweathermap.org/data/2.5';
const key = '2b9510149de4a280704cfdc7c9a6a6cb';
// This key should be private so the API call should be done server-sided
export const urlParams = `&APPID=${ key }&units=metric`;

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
