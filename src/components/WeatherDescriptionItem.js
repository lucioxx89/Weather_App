// import React, { useState, useEffect } from "react";

// const WeatherDescriptionItem = (props) => {
//   const URL = "http://localhost:3000/forecast.json";
//   const [weatherDescription, setWeatherDescription] = useState([]);

//   useEffect(() => {
//     fetch(URL)
//
//       .then((response) => {
//         return response.json();
//       })

//       .then((data) => {
//         setWeatherDescription(data.list);
//         console.log(data.list, "List ");
//       });
//   }, []);

//   return (
//     <div>
//       {weatherDescription.map((item, index) => {
//         const weatherDescriptionElement = item.weather[0].description;
//         return (
//           <div key={index}>
//             <p> {weatherDescriptionElement} </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default WeatherDescriptionItem;
