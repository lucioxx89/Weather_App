import React from "react";

const ForecastList = () => {
  // const DUMMY_DATA = [
  //   { city: "London", weather: " sunny", temperature: "25 degrees" },
  //   { city: "Roma", weather: " cloudy", temperature: "30, degrees" },
  //   { city: "New York", weather: " rainy", temperature: "24 degrees" },
  //   { city: "Oslo", weather: " cloudy", temperature: "18 degrees" },
  // ];

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=41.93012&lon=2.25486&appid=24c3564ab328937258934fca6c93f832"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.city.name);

      return data.city.name;
    });

  // });
  // data.list.map((item, index) => {
  return (
    <div>
      <p> Weather forecast:</p>
      <ul>
        <li>{}</li>
      </ul>
    </div>
  );
  // });
};

export default ForecastList;

//  {/* <ul key={index}> */}
//  <li>
//  {item.data.city.name}, {item.data},
//  {item.temperature}
// </li>
// </ul>
{
  /* {Dummy_data.map((item, index) => (
        <ul key={index}>
          <li>
            {item.city}, {item.weather}, {item.temperature}
          </li>
        </ul>
      ))} */
}
