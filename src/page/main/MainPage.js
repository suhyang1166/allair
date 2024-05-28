import React from "react";
import "./MainPage.css";
import AirButton from "../../component/AirButton";
import WeatherData from "../../component/WeatherData";
import AirportMap from "../../component/AirportMap";
import { Link } from "react-router-dom";
import SearchBar from "../../component/SearchBar";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Link to="/">
        <div className="main_log">
          <button>로그아웃</button>
        </div>
      </Link>
      <div className="main_search">
        <h1>국내공항정보를 알고싶은신가요?</h1>
        <SearchBar />
        <div className="main_btn">
          <AirButton />
          <WeatherData />
        </div>
      </div>
      <div className="main_map">
        <AirportMap />
      </div>
    </div>
  );
};

export default MainPage;
