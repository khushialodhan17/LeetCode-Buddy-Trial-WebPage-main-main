import React, { useEffect, useState } from "react";

const Navbar = ({ githubRepoLink }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "navbar-show" : "navbar-hide"}`}>
      <div className="navbar-brand">LeetCode Buddy</div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#benefits" className="navbar-link">
          Features
        </a>
        <a href="#demo" className="navbar-link">
          Demo
        </a>
        <a
          href={githubRepoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
