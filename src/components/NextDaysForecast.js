import React, { useState, useEffect } from "react";

import "./NextDaysForecast.css";

const NextDaysForecast = (props) => {
  // OPEN WEATHER API

  // const API_KEY = "24c3564ab328937258934fca6c93f832";

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
    <div>
      {hoursForecast.map((item, index) => {
        const date = item.valid_date;
        const MinForecastTemperature = item.low_temp;
        const MaxForecastTemperature = item.max_temp;
        const forecastDescription = item.weather.description;

        return (
          <div key={index} className="bottom_cards">
            <div>
              <div className="forecast_date">Date: {date}</div>

              <div className="forecast_temp">
                {" "}
                Min Temperature: {MinForecastTemperature}℃
              </div>

              <div className="forecast_temp">
                {" "}
                Max Temperature: {MaxForecastTemperature}℃
              </div>

              <div className="forecast_description">
                {" "}
                Description: {forecastDescription}
              </div>
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
