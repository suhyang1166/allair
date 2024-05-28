import React from "react";
import { useParams } from "react-router-dom";
import airport from "../../data/airport";
import { useFetchWeatherDataQuery } from "../../hooks/useCurrentWeather";

const AirportDetailPage = () => {
  const { id } = useParams();
  console.log("hhh", id, airport);

  const {
    data: airportWeather,
    isLoading: weatherLoading,
    isError: weatherError,
    error: weatherErrorMessage,
  } = useFetchWeatherDataQuery(airport.lat, airport.lng);
  console.log("bbb", airportWeather);

  if (weatherLoading) {
    return <div>Loading weather...</div>;
  }
  if (weatherError) {
    return <div>Error fetching weather: {weatherErrorMessage.message}</div>;
  }

  return <div>{/* <h3>{airport?.airportNM}</h3> */}00</div>;
};

export default AirportDetailPage;
