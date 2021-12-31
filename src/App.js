// import axios from "axios";
// import { useState, useEffect } from "react";
import CurrentWeather from "./Components/CurrentWeather";

function App() {
  return (
    <div className="App">
      <h1 className="nav-bar">
        <span className="brand">Weather App</span>
      </h1>

      <CurrentWeather />
    </div>
  );
}

export default App;
