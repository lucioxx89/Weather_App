import React, { useState } from "react";

import "./searchForm.css";

const SearchForm = () => {
  const [city, setCity] = useState("");

  const API_KEY = "24c3564ab328937258934fca6c93f832";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) throw response;
      return response.json();
    })

    .then((data) => {
      console.log(data, "List from city API");
    })
    .catch((error) => {
      console.log(error);
    });

  const onChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(city);
  };
  //   setCity("");

  return (
    <>
      <div className="search_bar">
        <form onSubmit={onSubmitHandler}>
          <input
            className="input"
            type="text"
            name="city"
            placeholder="Enter Location"
            onChange={onChangeHandler}
            value={city}
          />
          <button className="search_bar_button" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* <h1>{city.name}</h1> */}
    </>
  );
};

export default SearchForm;
