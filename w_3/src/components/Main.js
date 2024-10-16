import React, { useState } from "react";
import "../styles/main.css";
import Weather from "./Weather";

const cities = [
  { name: "Москва", lat: 55.7558, lon: 37.6173 },
  { name: "New York", lat: 40.7128, lon: -74.006 }, 
  { name: "Екатеринбург", lat: 56.8575, lon: 60.6125},
  { name: "Madrid", lat: 40.4165, lon: -3.7026},
];

function Main() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <main className="main-content">
      <div className="list-city">
        <h2>Выберете город</h2>        
        <select className="custom-select"
          value={selectedCity.name}
          onChange={(e) =>
            setSelectedCity(cities.find(city => city.name === e.target.value))
          }
        >
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <Weather selectedCity={selectedCity} />
      </div>
    </main>
  );
}

export default Main;
