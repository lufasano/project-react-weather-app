import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Saturday 10:44",
      iconUrl:
        "https://www.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <div className="row">
            <div className="col-6">
              <h3>{weatherData.date}</h3>
              <h1>{weatherData.city}</h1>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
              />
              <span id="degrees" className="temperature-units">
                <span id="up">
                  <span id="temp">{Math.round(weatherData.temperature)}</span>
                  <button href="#" id="celsius" className="active">
                    °C
                  </button>{" "}
                  <span> | </span>
                  <button href="#" id="farenheit">
                    °F
                  </button>
                </span>
              </span>
              <div className="weather-description">
                Humidity: {weatherData.humidity} <span id="humidity"></span>%
                <br />
                Wind: {Math.round(
                  weatherData.wind
                )} <span id="wind"></span> km/h
              </div>
            </div>
            <div className="col-6">
              <br />
              <form id="my-form">
                <input
                  className="form"
                  id="form-input"
                  type="text"
                  placeholder="Enter a city"
                  autocomplete="off"
                  autofocus="on"
                />
                <input className="button" type="submit" value="Search" />
              </form>
              <br />

              <button id="geo-button">Find my city</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4343f1e579144285b50031dd6494ce85";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
