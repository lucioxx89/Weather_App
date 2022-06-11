import React from "react";

const ForecastList = () => {
  const DUMMY_DATA = [
    { city: "London", weather: " sunny", temperature: "25 degrees" },
    { city: "Roma", weather: " cloudy", temperature: "30, degrees" },
    { city: "New York", weather: " rainy", temperature: "24 degrees" },
    { city: "Oslo", weather: " cloudy", temperature: "18 degrees" },
  ];
  return (
    <div>
      <p>Next weather forecast of the day:</p>
      {DUMMY_DATA.map((item, index) => (
        <ul key={index}>
          <li>
            {item.city}, {item.weather}, {item.temperature}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ForecastList;
