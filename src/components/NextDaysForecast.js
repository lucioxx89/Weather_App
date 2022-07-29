import React, { useState, useEffect } from "react";

import "./NextDaysForecast.css";

const NextDaysForecast = ({ forecastWeatherData }) => {
  if (!forecastWeatherData.data) {
    return <div></div>;
  }

  return <div>hello world</div>;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // return (
  //   <div className="bottom_container">
  //     {forecastWeatherData.data.slice(1, 5).map((item, index) => {
  //       //to get the weekday
  //       const date = new Date(item.valid_date);
  //       let weekDay = weekday[date.getDay()];

  //       const MinForecastTemperature = item.low_temp;
  //       const MaxForecastTemperature = item.max_temp;
  //       {
  //         /* const forecastDescription = item.weather.description; */
  //       }
  //       const iconUrl = `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`;

  //       //www.weatherbit.io/static/img/icons/{icon_code}.png .

  //       return (
  //         <div key={index}>
  //           <div className="forecast_card">
  //             <p className="forecast_date">{weekDay}</p>
  //             <p className="forecast_temp">Min: {MinForecastTemperature}℃</p>
  //             <p className="forecast_temp">Max: {MaxForecastTemperature}℃</p>
  //             <p>
  //               <img className="forecast_icon" src={iconUrl} alt="icon" />
  //             </p>
  //             {/* <p className="forecast_description">{forecastDescription}</p> */}
  //           </div>
  //         </div>
  //       );
  //     })}

  //     {forecastWeatherData.data.map((item, index) => {
  //       const time = item.dt_txt;
  //       const forecastTemperature = (item.main.temp / 1).toFixed(1);
  //       const forecastDescription = item.weather[0].main;
  //       return (
  //         <div key={index} className="bottom_cards">
  //           <div>
  //             <div className="forecast_date">Date: {time}</div>
  //             <div className="forecast_temp">
  //               {" "}
  //               Temperature: {forecastTemperature}℃
  //             </div>
  //             <div className="forecast_description">
  //               {" "}
  //               Description: {forecastDescription}
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default NextDaysForecast;
