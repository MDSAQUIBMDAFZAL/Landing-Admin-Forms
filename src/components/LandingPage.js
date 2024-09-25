import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/INDIA-WHITE-1.png";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/admin");
  };

  return (
    <div className="landing-page">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" width={150} height={50} />
        </a>
      </nav> */}
      <header className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for amazing services.</p>
        <button className="btn btn-primary" onClick={handleGetStarted}>
          Get Started
        </button>
      </header>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Feature 1</h3>
              <p>Details about feature 1.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature 2</h3>
              <p>Details about feature 2.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature 3</h3>
              <p>Details about feature 3.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
