import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/weather.css";

function Weather({ selectedCity }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCity) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast`,
            {
              params: {
                lat: selectedCity.lat,
                lon: selectedCity.lon,
                units: "metric",
                appid: "d0eac25c9049b566f97988f24d0e7a7e",
              },
            }
          );
          setWeatherData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching the weather data", error);
        }
      };
      fetchWeather();
    }
  }, [selectedCity]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather">
      {weatherData && (
        <>
          <div>
            <h2>Текущая погода в городе {selectedCity.name}</h2>
            <p>Температура: {weatherData.list[0].main.temp}°C</p>
            <p>Погода: {weatherData.list[0].weather[0].description}</p>
          </div>
          <div>
            <h3>Прогноз на 5 дней</h3>
            {weatherData.list.filter((item, index) => index % 8 === 0).map((item, index) => (
              <div key={index}>
                <p>День {index + 1}: {item.main.temp}°C, {item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
