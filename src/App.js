import React from "react";
import ForecastList from "./components/ForecastList";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <h1> Weather App </h1>
      <SearchForm />

      <ForecastList />
    </>
  );
}

export default App;
