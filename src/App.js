import React from "react";
import NextDaysForecast from "./components/NextDaysForecast";
// import ForecastList from "./components/ForecastList";
import SearchForm from "./components/SearchForm";
// import ActualWeather from "./components/ActualWeather";

function App() {
  return (
    <>
      <h1> Weather App </h1>
      <SearchForm />
      <NextDaysForecast />
      {/* <ActualWeather /> */}
      {/* <ForecastList /> */}
    </>
  );
}

export default App;
