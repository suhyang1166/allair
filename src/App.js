import "./App.css";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./page/intro/IntroPage";
import LoginPage from "./page/login/LoginPage";
import PrivateRoute from "./route/PrivateRoute";
import MainPage from "./page/main/MainPage";
import AirportDetailPage from "./page/airportDetailPage/AirportDetailPage";
import Airplane from "./page/airplane/Airplane";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/airport/:id" element={<AirportDetailPage />} />
      <Route path="/airplane" element={<Airplane />} />
    </Routes>
  );
}

export default App;
