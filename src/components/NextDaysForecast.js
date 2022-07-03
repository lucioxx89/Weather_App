import React, { useState, useEffect } from "react";

const NextDaysForecast = (props) => {
  //   const API_KEY = "24c3564ab328937258934fca6c93f832";

  const [hoursForecast, setHoursForecast] = useState([]);

  useEffect(() => {
    fetch(
      // `api.openweathermap.org/data/2.5/forecast?q=${props.location}&appid=${API_KEY}&units=metric`
      "http://localhost:3000/forecast.json"
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
  }, []);
  // setLocation(""); //set it back to empty string so input is empty again

  //   hoursForecast.map((item) => (
  //     return <h1> Hola{item.visibility}</h1>;
  //   ));

  //   return (
  //     <>
  //       {/* {hoursForecast.map((item) => {
  //         return <div>{item[0].visibility}</div>;
  //       })} */}

  //       {/* <div>
  //         <div>Monday </div>
  //         <div>Tuesday</div>
  //         <div>Wednesday</div>
  //       </div> */}
  //     </>
  //   );
};

export default NextDaysForecast;
