import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, RouterProvider, Routes } from "react-router-dom";
import router from "../src/routes/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
