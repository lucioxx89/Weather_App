import "./App.css";
import ForecastList from "./components/ForecastList";

function App() {
  const DUMMY_DATA = [
    {
      city: "London",
      temperature: "25 degrees",
    },
    { city: "Roma", temperature: "30 degrees" },
  ];

  return (
    <>
      <h1> Weather App </h1>
      <ForecastList />
      {DUMMY_DATA.map((item) => (
        <ul>
          <li>
            {item.city} {item.temperature}
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
