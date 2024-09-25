import React from 'react';

function FiveDayForecast({ forecastInfo }) {
  if (!forecastInfo) return null;

  const get_day_date = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const Week_day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const full_date = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return `${Week_day}, ${full_date}`;
  };

  const day_forecast = forecastInfo.list.filter((item, index) =>
    index % 8 === 0
  );

  return (
    <div className="FiveDayForecast">
      {day_forecast.map((item, index) => (
        <div key={index} className="Forecast">
          <h3>{get_day_date(item.dt)}</h3> {/* Day of the week and date */}
          <img 
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
            alt={item.weather[0].description} 
          />
          <p>{Math.round(item.main.temp)}°C</p>
          <p>{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default FiveDayForecast;
