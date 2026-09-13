import { useState } from "react";
import "./App.css";

function Weatherhw() {
  const [city, setCity] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      );

      const locationData = await locationResponse.json();

      if (!locationData.results) {
        setError("City not found");
        return;
      }

      const latitude = locationData.results[0].latitude;
      const longitude = locationData.results[0].longitude;

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
      );

      const data = await response.json();

      if (response.ok) {
        setWeather({
          name: locationData.results[0].name,
          temp: data.current.temperature_2m
        });
      } else {
        setError("Weather not found");
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="weather-box">

        <h2>Weather App</h2>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>
          {loading ? "Loading..." : "Get Weather"}
        </button>

        {loading && (
          <p className="loading">
            Getting weather...
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {weather && !loading && (
          <div className="weather-info">
            <h1>{weather.name}</h1>

            <p className="temperature">
              {weather.temp} °C
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Weatherhw;

