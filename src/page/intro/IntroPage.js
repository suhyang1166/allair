import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="Intro">
      <div className="intro_wrap">
        <h1>ALLAIR</h1>
        <Link to="/main">
          <button className="loginBtn">바로가기</button>
        </Link>
        <Link to="/login">
          <button className="loginBtn">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
