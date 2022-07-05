import React, { useState } from "react";

import WeatherForecast from "./WeatherForecast";

import NextDaysForecast from "./NextDaysForecast";

import "./searchForm.css";

const SearchForm = () => {
  const API_KEY = "24c3564ab328937258934fca6c93f832";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [wind, setWind] = useState("");
  const [feelsLike, setFeelsLike] = useState("");

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

        setCity(data);
        setCity(data.name);
        setCountry(data.sys);
        setTemperature(data.main.temp);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setFeelsLike(data.main.feels_like.toFixed(1));
        setHumidity(data.main.humidity);
        setWeatherDescription(data.weather[0].description);
        setWind(data.wind.speed.toFixed());
      })
      .catch((error) => {
        setLoading("");
        setError(error.message);
        setCity("");
        setCountry("");
        setTemperature("");
        setTempMin("");
        setTempMax("");
        setFeelsLike("");
        setHumidity("");
        setWeatherDescription("");
        setWind("");
        console.log(error.message);
      });
    setLocation(""); //set it back to empty string so input is empty again
  };

  const onChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  //copied
  const Temperature_Rounded = Number(temperature / 1).toFixed(1);
  const FeelsLike_Rounded = Number(feelsLike / 1).toFixed(1);
  const Min_Temperature_Rounded = Number(tempMin / 1).toFixed(1);
  const Max_Temperature_Rounded = Number(tempMax / 1).toFixed(1);
  const weatherDescriptionCapLetter =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

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

      <WeatherForecast
        city={city}
        country={country}
        Temperature_Rounded={Temperature_Rounded}
        weatherDescriptionCapLetter={weatherDescriptionCapLetter}
        humidity={humidity}
        FeelsLike_Rounded={FeelsLike_Rounded}
        Min_Temperature_Rounded={Min_Temperature_Rounded}
        Max_Temperature_Rounded={Max_Temperature_Rounded}
        wind={wind}
      />

      <NextDaysForecast location={location} />
    </div>
  );
};

export default SearchForm;
