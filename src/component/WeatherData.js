import React, { useState, useEffect } from "react";
import "./WeatherData.css";
import { useFetchWeatherDataQuery } from "../hooks/useCurrentWeather";

const WeatherData = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  // 현재위치 기준으로 위도/경도 잡기
  // useEffect를 빈 배열로 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함
  useEffect(() => {
    const getCurrentLocation = () => {
      // navigator.geolocation.getCurrentPosition는 사용자의 위치 정보를 비동기적으로 가져오는 함수
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat, lon });
      });
    };

    getCurrentLocation();
  }, []);

  const {
    data: weather,
    isLoading,
    isError,
    error,
  } = useFetchWeatherDataQuery(
    // 현재위치기준 필수값 location 붙여야 가져올수있음
    location.lat,
    location.lon
  );
  console.log(weather);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>error:{error.message}</div>;
  }

  return (
    <div className="WeatherData">
      <img
        style={{ width: "80px" }}
        src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt="날씨"
      ></img>
      <div>
        <p>{weather?.name}</p>
        <p>{`${weather?.main.temp.toFixed(1)} ℃`}</p>
        <p>{weather?.weather[0]?.description}</p>
      </div>
    </div>
  );
};

export default WeatherData;
