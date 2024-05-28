import axios from "axios";

export const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: { "Content-Type": "weather/json" },
});

// 요청 인터셉터 추가하기
openWeatherApi.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    console.log("request start", config);
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    console.log("request error", error);
    return Promise.reject(error);
  }
);

openWeatherApi.interceptors.response.use(
  function (response) {
    console.log("get request", response);
    return response;
  },
  function (error) {
    console.log("response error", error);
    return Promise.reject(error);
  }
);
