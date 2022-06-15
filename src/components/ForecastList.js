import React, { useState, useEffect } from "react";

const ForecastList = () => {
  const [forecastList, setForecastList] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/forecast.json")
      // fetch(
      //   "https://api.openweathermap.org/data/2.5/forecast?lat=41.93012&lon=2.25486&appid=24c3564ab328937258934fca6c93f832"
      // )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        // const forecastArray = data.list[0].main.temp.map((item) => {
        //   return item;
        // });
        // setForecastList(forecastArray);

        setCity(data.city.name);
        setForecastList(data.list);

        console.log(data.city.name, "List from API");
        console.log(data.list, "List from API");
      });
  }, []);

  return (
    <div>
      <h3> Weather forecast for {city} :</h3>
      {forecastList.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              Date: {item.dt_txt} Temperature : {item.main.temp}
            </li>
          </ul>
        );
      })}

      <ul>
        <li>{} </li>
      </ul>
    </div>
  );
};

export default ForecastList;

// const DUMMY_DATA = [
//   { city: "London", weather: " sunny", temperature: "25 degrees" },
//   { city: "Roma", weather: " cloudy", temperature: "30, degrees" },
//   { city: "New York", weather: " rainy", temperature: "24 degrees" },
//   { city: "Oslo", weather: " cloudy", temperature: "18 degrees" },
// ];

// data.list.map((item, index) => {
//  {/* <ul key={index}> */}
//  <li>
//  {item.data.city.name}, {item.data},
//  {item.temperature}
// </li>
// </ul>
