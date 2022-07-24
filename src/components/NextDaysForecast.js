import React, { useState, useEffect } from "react";

import "./NextDaysForecast.css";

const NextDaysForecast = (props) => {
  // OPEN WEATHER API

  // const API_KEY = "24c3564ab328937258934fca6c93f832";

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const API_KEY = "4b2a61b0ed7044c28a2bb6975f2d0305";

  const [hoursForecast, setHoursForecast] = useState([]);

  const location = props.location;

  // use effect
  useEffect(() => {
    fetch(
      // `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
      // "http://localhost:3000/daily.json"

      `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${API_KEY}`
    )
      .then((response) => {
        if (!response.ok || response.ok === 0)
          throw Error("There was a problem with your request.Try again!");
        return response.json();
      })

      .then((data) => {
        console.log(data, "Next days forecast");

        setHoursForecast(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [location]);

  return (
    <div className="bottom_container">
      {hoursForecast.slice(1, 5).map((item, index) => {
        //to get the weekday
        const date = new Date(item.valid_date);
        let weekDay = weekday[date.getDay()];

        const MinForecastTemperature = item.low_temp;
        const MaxForecastTemperature = item.max_temp;
        {
          /* const forecastDescription = item.weather.description; */
        }
        const iconUrl = `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`;

        //www.weatherbit.io/static/img/icons/{icon_code}.png .

        return (
          <div key={index}>
            <div className="forecast_card">
              <p className="forecast_date">{weekDay}</p>
              <p className="forecast_temp">Min: {MinForecastTemperature}℃</p>
              <p className="forecast_temp">Max: {MaxForecastTemperature}℃</p>
              <p>
                <img className="forecast_icon" src={iconUrl} alt="icon" />
              </p>
              {/* <p className="forecast_description">{forecastDescription}</p> */}
            </div>
          </div>
        );
      })}

      {/* {hoursForecast.map((item, index) => {
        const time = item.dt_txt;
        const forecastTemperature = (item.main.temp / 1).toFixed(1);
        const forecastDescription = item.weather[0].main;

        return (
          <div key={index} className="bottom_cards">
            <div>
              <div className="forecast_date">Date: {time}</div>
              <div className="forecast_temp">
                {" "}
                Temperature: {forecastTemperature}℃
              </div>
              <div className="forecast_description">
                {" "}
                Description: {forecastDescription}
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default NextDaysForecast;
