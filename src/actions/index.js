import axios from 'axios';

const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
const route_url =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER ='FETCH_WEATHER';
export function fetchWeather(city){
  const url = `${route_url}&q=${city},us`;
  const request = axios.get(url);
  return {
    type:FETCH_WEATHER,
    payload:request
  }
}
