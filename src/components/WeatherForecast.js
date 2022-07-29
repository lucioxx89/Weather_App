import React from "react";

import "./WeatherForecast.css";

const WeatherForecast = ({ currentWeatherData }) => {
  // let { currentWeatherData } = props;  // destructuring props => either pass it as object in the function or pass props and then descructuring here.

  if (!currentWeatherData.name) {
    return <div></div>;
  }

  const Temperature_Rounded = Number(currentWeatherData.main.temp / 1).toFixed(
    1
  );

  const FeelsLike_Rounded = Number(
    currentWeatherData.main.feels_like / 1
  ).toFixed(1);

  const Min_Temperature_Rounded = Number(
    currentWeatherData.main.temp_min / 1
  ).toFixed(1);

  const Max_Temperature_Rounded = Number(
    currentWeatherData.main.temp_max / 1
  ).toFixed(1);

  const weatherDescriptionCapLetter =
    currentWeatherData.weather[0].description.charAt(0).toUpperCase() +
    currentWeatherData.weather[0].description.slice(1);

  const wind = currentWeatherData.wind.speed.toFixed();

  return (
    <div className="weather_container">
      <div className="top_info">
        <div className="location">
          {currentWeatherData.name}
          <span className="country">({currentWeatherData.sys.country})</span>
        </div>
        <div className="actual_temperature">{Temperature_Rounded}℃</div>
        <div className="weather_description">{weatherDescriptionCapLetter}</div>
      </div>

      <div className="bottom_info">
        <div className="humidity">
          <p>{currentWeatherData.main.humidity}%</p>
          <p>Humidity</p>{" "}
        </div>

        <div className="feels_like">
          <p> {FeelsLike_Rounded}℃</p>
          <p> Feels like </p>
        </div>

        <div className="temp_min">
          <p>{Min_Temperature_Rounded}℃</p>
          <p>Min</p>
        </div>

        <div className="temp_max">
          <p>{Max_Temperature_Rounded}℃</p>
          <p>Max</p>
        </div>

        <div className="wind_speed">
          <p>{wind}MPS</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
