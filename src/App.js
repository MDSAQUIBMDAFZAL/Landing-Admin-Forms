import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminForm from "./components/AdminForm";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
