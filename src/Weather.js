import React from "react";
import "./Weather.css"

export default function Weather() {
  let weatherData = {
    city: "Honolulu",
    date: "Monday, Oct 5, 2022 11:30",
    temperature: 75,
    description: "Sunny",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    humidity: "69",
    wind: "5"
  };
  return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w100"
              />
            </div>
          </div>
        </form>
        <h2>{weatherData.date}</h2>
        <h1>{weatherData.city}</h1>
        <strong>{weatherData.temperature}</strong>
        <span className="units">°F</span>
        <br />
        <img
          id="icon"
          src={weatherData.iconUrl}
          alt={weatherData.description}
        />
        <ul>
          <li>{weatherData.description}</li>
          <br />
          <li>
            <em>
              Humidity: <span>{weatherData.humidity}</span>%
            </em>
          </li>
          <li>
            <em>
              Wind: <span>{weatherData.wind}</span> mph
            </em>
          </li>
        </ul>
        <a href="https://github.com/akgraham/weather-react">Open-source code</a> <span className="signature">by Anolani Graham</span>
      </div>
  );
}