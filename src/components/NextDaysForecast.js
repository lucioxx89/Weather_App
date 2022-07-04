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
        return (
          <div key={index}>
            <div>Date: {item.dt_txt}</div>
            <div> Temp: {(item.main.temp / 1).toFixed(1)}</div>
            <div> Description: {item.weather[0].main}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NextDaysForecast;
