import axios from 'axios';

const API_key = 'Enter your API key here';
const Url = 'https://api.openweathermap.org/data/2.5';

export const get_weather = async (city) => {
  const response = await axios.get(`${Url}/weather`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_key
    }
  });
  return response.data;
};

export const get_weather_coordinates = async (lat, lon) => {
  const response = await axios.get(`${Url}/weather`, {
    params: {
      lat,
      lon,
      units: 'metric',
      appid: API_key
    }
  });
  return response.data;
};

export const get_forecast_coordinates = async (lat, lon) => {
    const response = await axios.get(`${Url}/forecast`, {
        params: {
          lat,
          lon,
          units: 'metric',
          appid: API_key
        }
      });
      return response.data;
    };


export const get_forecast = async (city) => {
  const response = await axios.get(`${Url}/forecast`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_key
    }
  });
  return response.data;



};
