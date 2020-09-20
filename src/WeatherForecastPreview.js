import React from "react";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return ` ${temperature}°C`;
  }

  return (
    <div className="WeatherForecastPreview col">
      <div> {hours()} </div>
      <img
        src={`./images/${props.data.weather[0].icon}.png`}
        alt={props.data.weather[0].description}
        id="icon"
      />{" "}
      <br />
      <div>{temperature()} </div>
    </div>
  );
}
