import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Blogify!</h1>
          <p>
            Discover a world of ideas, share your stories, and connect with
            people who inspire you. Blogify is your gateway to creativity and
            meaningful conversations.
          </p>
          <Link to="/login">
            <button className="btn-primary">Get Started</button>
          </Link>
        </div>
        
      </div>

      


    </div>
  );
};

export default HomePage;
