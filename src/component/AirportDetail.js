import React from "react";
import "./AirportDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useFetchWeatherDataQuery } from "../hooks/useCurrentWeather";
import airport from "../data/airport.js";
import { useNavigate } from "react-router-dom";

const AirportDetail = ({ title }) => {
  const navigate = useNavigate();
  // console.log("ddd", airport);
  // 공항 데이터를 찾기
  const selectedAirport = airport.find((item) => item.airportNM === title);

  // 선택된 공항의 위도와 경도를 기반으로 날씨 데이터 가져오기
  const {
    data: airportWeather,
    isLoading: weatherLoading,
    isError: weatherError,
    error: weatherErrorMessage,
  } = useFetchWeatherDataQuery(selectedAirport.lat, selectedAirport.lng);
  // console.log("bbb", airportWeather);

  if (weatherLoading) {
    return <div>Loading weather...</div>;
  }
  if (weatherError) {
    return <div>Error fetching weather: {weatherErrorMessage.message}</div>;
  }

  const goToAirportDetail = () => {
    navigate(`/airport/${airportWeather.id}`);
  };

  return (
    <div className="AirportDetail" onClick={goToAirportDetail}>
      <div className="aitport-weather">
        <img
          style={{ width: "50px" }}
          src={`http://openweathermap.org/img/wn/${airportWeather?.weather[0].icon}@2x.png`}
          alt="날씨"
        ></img>
        <div className="aitport-weather-text">
          <p>{title}</p>
          <p>{airportWeather?.main.temp.toFixed(1)}℃</p>
          <p>{airportWeather?.weather[0]?.description}</p>
        </div>
      </div>
      <div className="airport_icon">
        <FontAwesomeIcon className="icon" icon={faLocationDot} />
      </div>
      <div className="airport_title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default AirportDetail;
