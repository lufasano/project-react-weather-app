import React from "react";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return ` ${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return ` ${temperature}°`;
  }
  return (
    <div className="WeatherForecastPreview col">
      <div> {day()} </div>
      <div className="box">
        <img
          src={`./images/${props.data.weather[0].icon}.png`}
          alt={props.data.weather[0].description}
          id="icon"
        />
      </div>
      <div>
        <span className="Weather-forecast-temp-max">{maxTemp()}</span> |
        <span className="Weather-forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
