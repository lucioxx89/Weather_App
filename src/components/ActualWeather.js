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

  useEffect(() => {
    fetch("http://localhost:3000/weather.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "myData");
        setCity(data.name);
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWeatherDescription(data.weather[0].description);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setWind(data.wind.speed);
      });
  }, []);

  const Temperature_Rounded = Number(temperature / 10).toFixed(1);
  const Min_Temperature_Rounded = Number(tempMin / 10).toFixed(1);
  const Max_Temperature_Rounded = Number(tempMax / 10).toFixed(1);
  const weatherDescription_cap_letter =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  return (
    <>
      <div className="weather_container">
        <div className="top_info">
          {" "}
          <div className="location">{city}</div>
          <div className="temperature">{Temperature_Rounded}°</div>
          <div className="weather_description">
            {" "}
            {weatherDescription_cap_letter}{" "}
          </div>
        </div>

        <div className="bottom_info">
          <div className="humidity">
            <p>{humidity}%</p>
            <p>Humidity</p>{" "}
          </div>

          <div className="temp_min">
            <p>{Min_Temperature_Rounded}°</p>
            <p>Min</p>
          </div>

          <div className="temp_max">
            <p>{Max_Temperature_Rounded}°</p>
            <p>Max</p>
          </div>

          <div className="wind">
            <p>{wind}m/sec</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActualWeather;
