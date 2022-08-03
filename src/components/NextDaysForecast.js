import React from "react";

import "./NextDaysForecast.css";

const NextDaysForecast = ({ forecastWeatherData }) => {
  if (!forecastWeatherData.data) {
    return <div></div>;
  }

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="bottom_container">
      {forecastWeatherData.data.slice(1, 5).map((item, index) => {
        //to get the weekday
        const date = new Date(item.valid_date);
        console.log(date, "date");
        let weekDay = weekday[date.getDay()];

        const MinForecastTemperature = item.low_temp;

        const MaxForecastTemperature = item.max_temp;

        const iconUrl = `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`;

        return (
          <div key={index} className="forecast_card">
            <p className="forecast_date">{weekDay}</p>
            <p className="forecast_temp">{MinForecastTemperature}℃</p>
            <p className="forecast_temp">{MaxForecastTemperature}℃</p>
            <p>
              <img className="forecast_icon" src={iconUrl} alt="icon" />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NextDaysForecast;
