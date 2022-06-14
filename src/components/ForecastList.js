import React, { useState } from "react";

const ForecastList = () => {
  const [forecastList, setForecastList] = useState([]);

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=41.93012&lon=2.25486&appid=24c3564ab328937258934fca6c93f832"
  )
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      const forecastArray = data.list.map((item) => {
        return item.main.temp;
      });
      setForecastList(forecastArray);
      console.log(data.list, "List from API");
    });

  return (
    <div>
      <p> Weather forecast:</p>

      <ul>
        <li>{forecastList}</li>
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
