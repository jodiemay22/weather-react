import React from "react";
import CurrentTemp from "./CurrentTemp";
import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";

export default function CurrentWeather() {
  return (
    <div className="forecast row">
      <ul className="col-sm ">
        <li className="current-temp">
          <span role="img" aria-label="icon">
            ☀️
          </span>
          <span id="temp-element">
            <CurrentTemp value={19} />
          </span>
        </li>
      </ul>
      <ul className="col-sm current-details">
        <li className="description" id="description"></li>
        <FeelsLike value={21} />
        <Humidity value={40} />
        <WindSpeed value={10} />
      </ul>
    </div>
  );
}
