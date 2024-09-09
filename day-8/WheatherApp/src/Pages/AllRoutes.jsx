import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import WeatherDetails from "./WeatherDetails";
import Weather from "./Weather";
import PrivateRoute from "../PrivateRoute";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Weather />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/details"
          element={
            <PrivateRoute>
              <WeatherDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
