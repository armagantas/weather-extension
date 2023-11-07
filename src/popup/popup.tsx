import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import "fontsource-roboto";
import WeatherCard from "./WeatherCard";

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Istanbul" />
      <WeatherCard city="Kars" />
      <WeatherCard city="Error" />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
