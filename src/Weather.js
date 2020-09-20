import React, { useState } from "react";
import ShowDate from "./ShowDate";
import TemperatureConversion from "./TemperatureConversion";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `./images/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4343f1e579144285b50031dd6494ce85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <div className="row">
            <div className="col-6">
              <h3>
                <ShowDate date={weatherData.date} />
              </h3>
              <h1>{weatherData.city}</h1>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
              />
              <span id="degrees" className="temperature-units">
                <span id="up">
                  <span id="temp">
                    <TemperatureConversion celsius={weatherData.temperature} />
                  </span>
                </span>
              </span>
              <div className="weather-description">
                <span id="humidity">Humidity: {weatherData.humidity} %</span>
                <br />
                <span id="wind">
                  Wind: {Math.round(weatherData.wind)} km/h{" "}
                </span>
              </div>
            </div>
            <div className="col-6">
              <br />
              <form onSubmit={handleSubmit} id="my-form">
                <input
                  className="form"
                  id="form-input"
                  type="search"
                  placeholder="Enter a city"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <input className="button" type="submit" value="Search" />
              </form>
              <br />
            </div>
          </div>
          <br />
          <WeatherForecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
