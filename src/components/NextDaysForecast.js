import React, { useState, useEffect } from "react";

const NextDaysForecast = (props) => {
  const API_KEY = "24c3564ab328937258934fca6c93f832";

  const [hoursForecast, setHoursForecast] = useState([]);

  const location = props.location;
  //   console.log(props, "props");
  //   console.log(location, "location");

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
        // setError("");
        // setLoading("");

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
      })
      .catch((error) => {
        // setLoading("");
        // setError(error.message);
        // setCity("");
        // setCountry("");
        // setTemperature("");
        // setTempMin("");
        // setTempMax("");
        // setFeelsLike("");
        // setHumidity("");
        // setWeatherDescription("");
        // setWind("");
        console.log(error.message);
      });
  }, [location]);
  // setLocation(""); //set it back to empty string so input is empty again

  return (
    <div>
      {hoursForecast.map((item, index) => {
        return (
          <div key={index}>
            <div>Date: {item.dt_txt}</div>
            <div> Temp: {(item.main.temp / 1).toFixed(1)}</div>
            <div> {item.weather[0].main}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NextDaysForecast;
