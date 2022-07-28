import React, { useState } from "react";

import WeatherForecast from "./WeatherForecast";

import NextDaysForecast from "./NextDaysForecast";

import "./searchForm.css";

const SearchForm = () => {
  const API_KEY_OPEN_WEATHER_MAP = "24c3564ab328937258934fca6c93f832";
  const API_KEY_WEATHERBIT = "4b2a61b0ed7044c28a2bb6975f2d0305";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [location, setLocation] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastWeatherData, setForecastWeatherData] = useState({});

  const onSubmitHandler = (event) => {
    setLoading("Loading...");
    event.preventDefault();
    const requestLocation = location;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${requestLocation}&appid=${API_KEY_OPEN_WEATHER_MAP}&units=metric`
    )
      .then((response) => {
        if (!response.ok || response.ok === 0)
          throw Error("There was a problem with your request.Try again!");
        return response.json();
      })

      .then((data) => {
        console.log(data, "List from city API");

        setError("");
        setLoading("");
        setLocation("");
        setCurrentWeatherData(data);
      })
      .catch((error) => {
        setLoading("");
        setError(error.message);
        setCurrentWeatherData({});
        console.log(error.message);
      });
    setLocation(""); //set it back to empty string so input is empty again

    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${requestLocation}&key=${API_KEY_WEATHERBIT}`
    )
      .then((response) => {
        if (!response.ok || response.ok === 0)
          throw Error("There was a problem with your request.Try again!");
        return response.json();
      })

      .then((data) => {
        console.log(data, "Next days forecast");

        setForecastWeatherData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="main_body">
      <div className="search_bar">
        <form onSubmit={onSubmitHandler}>
          <input
            className="input"
            type="text"
            name="city"
            placeholder="Enter Location"
            onChange={onChangeHandler}
            value={location}
          />
          <button className="search_bar_button" type="submit">
            Search
          </button>
        </form>
      </div>

      <p className="loading">{loading}</p>
      <p className="error"> {error} </p>

      <WeatherForecast currentWeatherData={currentWeatherData} />
      <NextDaysForecast forecastWeatherData={forecastWeatherData} />
    </div>
  );
};

export default SearchForm;
