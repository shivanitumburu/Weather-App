import React from 'react';

function Currentweather({ weatherInfo }) {
  if (!weatherInfo) return null;

  return (
    <div className="Currentweather">
      <h2>{weatherInfo.name}, {weatherInfo.sys.country}</h2>
      <img 
        src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`} 
        alt={weatherInfo.weather[0].description} 
      />
      <p style={{ fontFamily:"Garamond",fontSize:"22px"}}><img src="https://img.icons8.com/?size=100&id=cfDWnVHy1b9l&format=png&color=000000" style={{ width: '40px', height: '40px' }} alt="temp" ></img><b>Temperature: {Math.round(weatherInfo.main.temp)}°C</b></p>
      <p style={{ fontFamily:"Garamond",fontSize:"22px"}}><img src="https://img.icons8.com/?size=100&id=15365&format=png&color=000000" style={{ width: '40px', height: '40px' }} alt="humid" ></img><b>Humidity: {weatherInfo.main.humidity}%</b></p>
      <p style={{ fontFamily:"Garamond",fontSize:"22px"}}><img src="https://img.icons8.com/?size=100&id=RtDA8YDN9Mi9&format=png&color=000000" style={{ width: '40px', height: '40px' }} alt="wind" ></img><b> Wind Speed: {weatherInfo.wind.speed} m/s</b></p>
      <p style={{ fontFamily:"Garamond",fontSize:"22px"}}><img src="https://img.icons8.com/?size=100&id=P9tT31QGJr_S&format=png&color=000000" style={{ width: '40px', height: '40px' }} alt="Weather" ></img><b> Weather: {weatherInfo.weather[0].description}</b></p>
    </div>
  );
}

export default Currentweather;
