import React from "react";

import "./WeatherForecast.css";

const WeatherForecast = ({ currentWeatherData }) => {
  // let { currentWeatherData } = props;

  // / const Temperature_Rounded = Number(temperature / 1).toFixed(1);
  // // const FeelsLike_Rounded = Number(feelsLike / 1).toFixed(1);
  // // const Min_Temperature_Rounded = Number(tempMin / 1).toFixed(1);
  // // const Max_Temperature_Rounded = Number(tempMax / 1).toFixed(1);
  // // const weatherDescriptionCapLetter =
  // //   weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

  return <div>{currentWeatherData.name}</div>;

  // For reference
  // setCity(data);
  // setCity(data.name);
  // setCountry(data.sys);
  // setTemperature(data.main.temp);
  // setTempMin(data.main.temp_min);
  // setTempMax(data.main.temp_max);
  // setFeelsLike(data.main.feels_like.toFixed(1));
  // setHumidity(data.main.humidity);
  // setWeatherDescription(data.weather[0].description);
  // setWind(data.wind.speed.toFixed());

  // return (
  //   <div className="weather_container">
  //     <div className="top_info">
  //       {" "}
  //       <div className="location">
  //         {props.city}{" "}
  //         <span className="country">({props.country.country})</span>
  //       </div>
  //       <div className="actual_temperature">{props.Temperature_Rounded}℃</div>
  //       <div className="weather_description">
  //         {" "}
  //         {props.weatherDescriptionCapLetter}{" "}
  //       </div>
  //     </div>
  //     <div className="bottom_info">
  //       <div className="humidity">
  //         <p>{props.humidity}%</p>
  //         <p>Humidity</p>{" "}
  //       </div>
  //       <div className="feels_like">
  //         <p> {props.FeelsLike_Rounded}℃</p>
  //         <p> Feels like </p>
  //       </div>
  //       <div className="temp_min">
  //         <p>{props.Min_Temperature_Rounded}℃</p>
  //         <p>Min</p>
  //       </div>
  //       <div className="temp_max">
  //         <p>{props.Max_Temperature_Rounded}℃</p>
  //         <p>Max</p>
  //       </div>
  //       <div className="wind_speed">
  //         <p>{props.wind}MPS</p>
  //         <p>Wind Speed</p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default WeatherForecast;
