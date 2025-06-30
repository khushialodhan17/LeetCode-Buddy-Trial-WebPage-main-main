import React from "react";

const HeroSection = ({ githubRepoLink }) => (
  <header className="hero-section" id="home">
    <div className="container">
      <h1 className="hero-title">
        <span className="animated-text-container">
          Elevate Your Coding & Interviews
        </span>
      </h1>
      <p className="hero-subtitle">
        Your AI-powered co-pilot for LeetCode mastery and technical interview
        success.
      </p>
      <a
        href={githubRepoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-button"
      >
        Explore the Code on GitHub
      </a>
      <div className="image-grid">
        <div className="image-grid-item">
          <img src="images/img6.png" alt="Data Structure" />
        </div>
        <div className="image-grid-item">
          <img src="images/img5.jpg" alt="Algo" />
        </div>
        <div className="image-grid-item">
          <img src="images/img4.avif" alt="Code" />
        </div>
        <div className="image-grid-item hidden-xl">
          <img src="images/img7.png" alt="DSA" />
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
