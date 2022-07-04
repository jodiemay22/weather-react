import React from "react";

import "./App.css";
import Search from "./Search";
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Location />
          <CurrentWeather />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
