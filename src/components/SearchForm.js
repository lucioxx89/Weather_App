import React, { useState } from "react";

const SearchForm = () => {
  const [city, setCity] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24c3564ab328937258934fca6c93f832`;

  fetch(URL)
    .then((response) => {
      if (!response.ok) throw response;
      return response.json();
    })

    .then((data) => {
      console.log(data.list, "List from API");
    })
    .catch((error) => {
      console.log(error);
    });

  const onChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setCity("");
    console.log(city);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="city"
          placeholder="Enter Location"
          onChange={onChangeHandler}
          value={city}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
