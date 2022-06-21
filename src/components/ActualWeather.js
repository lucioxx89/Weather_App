import React, { useEffect, useState } from "react";

import "./ActualWeather.css";

const ActualWeather = () => {
  //   const API_KEY = "24c3564ab328937258934fca6c93f832";
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [wind, setWind] = useState("");
  const [feelsLike, setFeelsLike] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/weather.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "myData");
        setCity(data.name);
        setTemperature(data.main.temp);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setFeelsLike(data.main.feels_like.toFixed(1));
        setHumidity(data.main.humidity);
        setWeatherDescription(data.weather[0].description);

        setWind(data.wind.speed.toFixed());
      });
  }, []);

  const Temperature_Rounded = Number(temperature / 10).toFixed(1);
  const FeelsLike_Rounded = Number(feelsLike / 10).toFixed(1);

  const Min_Temperature_Rounded = Number(tempMin / 10).toFixed(1);
  const Max_Temperature_Rounded = Number(tempMax / 10).toFixed(1);
  const weatherDescriptionCapLetter =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  return (
    <>
      <div className="weather_container">
        <div className="top_info">
          {" "}
          <div className="location">{city}</div>
          <div className="actual_temperature">{Temperature_Rounded}℃</div>
          <div className="weather_description">
            {" "}
            {weatherDescriptionCapLetter}{" "}
          </div>
        </div>

        <div className="bottom_info">
          <div className="humidity">
            <p>{humidity}%</p>
            <p>Humidity</p>{" "}
          </div>
          <div className="feels_like">
            <p> {FeelsLike_Rounded}℃</p>
            <p> Feels like </p>
          </div>

          <div className="temp_min">
            <p>{Min_Temperature_Rounded}℃</p>
            <p>Min</p>
          </div>

          <div className="temp_max">
            <p>{Max_Temperature_Rounded}℃</p>
            <p>Max</p>
          </div>

          <div className="wind_speed">
            <p>{wind}MPS</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActualWeather;
