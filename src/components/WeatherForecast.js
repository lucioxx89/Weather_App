import React from "react";

import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  return (
    <div className="weather_container">
      <div className="top_info">
        {" "}
        <div className="location">{props.city}</div>
        <div className="actual_temperature">{props.Temperature_Rounded}℃</div>
        <div className="weather_description">
          {" "}
          {props.weatherDescriptionCapLetter}{" "}
        </div>
        {/* <div className="country">{country.country}</div> */}
      </div>

      <div className="bottom_info">
        <div className="humidity">
          <p>{props.humidity}%</p>
          <p>Humidity</p>{" "}
        </div>
        <div className="feels_like">
          <p> {props.FeelsLike_Rounded}℃</p>
          <p> Feels like </p>
        </div>

        <div className="temp_min">
          <p>{props.Min_Temperature_Rounded}℃</p>
          <p>Min</p>
        </div>

        <div className="temp_max">
          <p>{props.Max_Temperature_Rounded}℃</p>
          <p>Max</p>
        </div>

        <div className="wind_speed">
          <p>{props.wind}MPS</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
