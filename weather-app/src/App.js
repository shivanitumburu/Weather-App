import React, { useState } from 'react';
import Header from './components/Header';
import Searchbar from './components/Search';
import Currentweather from './components/Currentweather';
import FiveDayForecast from './components/FiveDayForecast';
import './App.css';
import './styles/Header.css';
import './styles/Search.css';
import './styles/Currentweather.css'
import './styles/FiveDayForecast.css'
import { get_weather,get_weather_coordinates,get_forecast_coordinates,get_forecast } from './components/API';


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(null);
  const search_component = async (city) => {
    const weather = await get_weather(city);
    const forecast = await get_forecast(city);
    setWeatherInfo(weather);
    setForecastInfo(forecast);
  };
  const user_location = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const weather = await get_weather_coordinates(latitude, longitude);
      const forecast = await get_forecast_coordinates(latitude, longitude);
      setWeatherInfo(weather);
      setForecastInfo(forecast);
    });
  };
  return (
    <div className="App">
      <Header />
      <Searchbar Search={search_component} UserLocation={user_location} />
      <Currentweather weatherInfo={weatherInfo} />
      <FiveDayForecast forecastInfo={forecastInfo} />
    </div>
      
    
  );
}

export default App;
