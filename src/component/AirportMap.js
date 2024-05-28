import React from "react";
import "./AirportMap.css";
import AirportDetail from "./AirportDetail";

const AirportMap = () => {
  const airportList = [
    "인천 국제공항",
    "김포 국제공항",
    "원주 국내공항",
    "양양 국제공항",
    "청주 국제공항",
    "새만금 신공항",
    "광주 국내공항",
    "무안 국제공항",
    "여수 국내공항",
    "사천 국내공항",
    "대구 국제공항",
    "김해 국제공항",
    "울산 국내공항",
    "포항 국내공항",
    "제주 국제공항",
  ];

  return (
    <div className="AirportMap_wrap">
      <div className="AirportMap">
        <img src={`${process.env.PUBLIC_URL}/img/map.svg`}></img>
      </div>
      <div className="airport_detail">
        {airportList.map((title, idx) => {
          return <AirportDetail key={idx} type="International" title={title} />;
        })}
      </div>
    </div>
  );
};

export default AirportMap;
