import React, { useState } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setCurrentLatitude(position.coords.latitude);
    },
    (err) => {
      console.log(err);
      setErrorMessage(err.message);
    }
  );

  function renderContent() {
    if (!errorMessage && !currentLatitude) {
      return <Spinner message="Please accept location request" />;
    } else if (!errorMessage) {
      return <SeasonDisplay lat={currentLatitude} />;
    } else {
      return <h1 style={{ color: "red" }}>Error : {errorMessage}</h1>;
    }
  }

  return (
      
  <div className="border red">{renderContent()}</div>

    //   { !errorMessage && !currentLatitude ? <Spinner message="Please accept location request"/> : !errorMessage ? <SeasonDisplay lat = {currentLatitude}/>  : <h1 style={{color: 'red'}}>Error : {errorMessage}</h1> }
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
