import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./UserPage/userPage";
import "./axiosConfig";

function App() {
  return (
    <div className="App" style={{ background: "#f5f5f5" }}>
      {/* <HomePage /> */}
      <UserPage/>
    </div>
  );
}

export default App;