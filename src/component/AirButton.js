import React from "react";
import "./AirButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AirButton = () => {
  return (
    <Link to="/airplane">
      <div className="AirButton">
        <FontAwesomeIcon className="air_icon" icon={faPlaneDeparture} />
        <h4>운행정보</h4>
      </div>
    </Link>
  );
};

export default AirButton;
