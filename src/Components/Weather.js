import React, { useState } from 'react';
import axios from 'axios';


function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "3904153bd2399310cc30b0fdebf5d9a8";

  const fetchDetails = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.log("You have an error:", error);
      setWeather(null);
    }
  };

  return (
    <div className="myData" style ={{ textAlign:'center', padding:'20px'}}>
      <h1>Welcome to Weather Updates</h1>
      <h1>City: {city}</h1>
      <input 
        type="text" 
        placeholder="Enter your City" 
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchDetails}>Fetch Data</button>

      {weather && (
        <div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
