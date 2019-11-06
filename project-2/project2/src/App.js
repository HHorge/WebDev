import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="Wrapper">
      <div className="Title">
        <h1>Welcome to our Artboard Machine</h1>
      </div>
      <div className="Navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
