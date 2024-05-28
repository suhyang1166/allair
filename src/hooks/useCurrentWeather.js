import { useQuery } from "@tanstack/react-query";
import { openWeatherApi } from "../utils/api";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function fetchWeatherData(lat, lon) {
  return openWeatherApi.get(
    `/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=kr&units=metric`
  );
}

export function useFetchWeatherDataQuery(lat, lon) {
  // console.log("area", lat, lon);
  return useQuery({
    queryKey: ["weather-data", lat, lon],
    queryFn: () => fetchWeatherData(lat, lon),
    select: (results) => results.data,
  });
}
