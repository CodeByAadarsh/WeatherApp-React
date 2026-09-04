import "./App.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weatherApp">
      <h1>Weather App By Aadarsh</h1>

      <p className="subtitle">Check the current weather of any city</p>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />
    </div>
  );
}
