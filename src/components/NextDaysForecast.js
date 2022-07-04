import React, { useState, useEffect } from "react";

const NextDaysForecast = (props) => {
  const API_KEY = "24c3564ab328937258934fca6c93f832";

  const [hoursForecast, setHoursForecast] = useState([]);

  const location = props.location;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
      //   "http://localhost:3000/forecast.json"
    )
      .then((response) => {
        if (!response.ok || response.ok === 0)
          throw Error("There was a problem with your request.Try again!");
        return response.json();
      })

      .then((data) => {
        console.log(data.list, "Next days forecast");

        setHoursForecast(data.list);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [location]);

  return (
    <div>
      {hoursForecast.map((item, index) => {
        const time = item.dt_txt;
        const forecastTemperature = (item.main.temp / 1).toFixed(1);
        const forecastDescription = item.weather[0].main;

        return (
          <div key={index}>
            <div>Date: {time}</div>
            <div> Temp: {forecastTemperature}℃</div>
            <div> Description: {forecastDescription}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NextDaysForecast;
