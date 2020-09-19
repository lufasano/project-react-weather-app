import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h3>Saturday 10:48</h3>
            <h1>Lisbon</h1>
            <img
              src="https://www.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png"
              alt=""
              id="icon"
            />
            <span id="degrees" className="temperature-units">
              <span id="temp">22</span>
              <span id="up">
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
              Humidity: <span id="humidity"></span>%
              <br />
              Wind: <span id="wind"></span> km/h
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
}
