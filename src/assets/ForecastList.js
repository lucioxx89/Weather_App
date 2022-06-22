// import React, { useState, useEffect } from "react";
// // import WeatherDescriptionItem from "./WeatherDescriptionItem";

// const ForecastList = (props) => {
//   const [city, setCity] = useState("");
//   const [forecastList, setForecastList] = useState([]);
//   // const [weatherDescription, setWeatherDescription] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/forecast.json")
//       // fetch(
//       //   "https://api.openweathermap.org/data/2.5/forecast?lat=41.93012&lon=2.25486&appid=24c3564ab328937258934fca6c93f832"
//       // )

//       // city

//       // https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24c3564ab328937258934fca6c93f832
//       .then((response) => {
//         if (!response.ok) throw response;
//         return response.json();
//       })

//       .then((data) => {
//         setCity(data.city.name);
//         setForecastList(data.list);
//         // setWeatherDescription(data.list);

//         console.log(data.city.name, "List from API");
//         console.log(data.list, "List from API");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h3> Weather forecast for {city} :</h3>
//       {forecastList.map((item, index) => {
//         const temperature = (item.main.temp / 10).toFixed(1);
//         {
//           /* const min_temperature = (item.main.temp_min / 10).toFixed(1);
//         const max_temperature = (item.main.temp_max / 10).toFixed(1); */
//         }
//         const description = item.weather[0].description;

//         return (
//           <ul key={index}>
//             <li>
//               <span style={{ fontWeight: "bolder" }}>Date: </span> {item.dt_txt}{" "}
//               <span style={{ fontWeight: "bolder" }}>Temperature: </span>
//               {temperature}
//               {/* Min Temperature: {min_temperature}
//               Max Temperature: {max_temperature} */}
//               <span style={{ fontWeight: "bolder" }}>Description: </span>
//               {description}
//             </li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default ForecastList;
