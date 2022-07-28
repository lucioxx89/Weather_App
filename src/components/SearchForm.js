import React, { useState } from "react";

import WeatherForecast from "./WeatherForecast";

import NextDaysForecast from "./NextDaysForecast";

import "./searchForm.css";

const SearchForm = () => {
  const API_KEY = "24c3564ab328937258934fca6c93f832";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [location, setLocation] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState({});

  const onSubmitHandler = (event) => {
    setLoading("Loading...");
    event.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
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
  };

  const onChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  let currentWeatherComponent;
  if (currentWeatherData.name) {
    currentWeatherComponent = (
      <WeatherForecast currentWeatherData={currentWeatherData} />
    );
  } else {
    currentWeatherComponent = "";
  }

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

      {currentWeatherComponent}

      {/* <WeatherForecast
        city={city}
        country={country}
        Temperature_Rounded={Temperature_Rounded}
        weatherDescriptionCapLetter={weatherDescriptionCapLetter}
        humidity={humidity}
        FeelsLike_Rounded={FeelsLike_Rounded}
        Min_Temperature_Rounded={Min_Temperature_Rounded}
        Max_Temperature_Rounded={Max_Temperature_Rounded}
        wind={wind}
      /> */}

      {/* <NextDaysForecast location={location} /> */}
    </div>
  );
};

export default SearchForm;
