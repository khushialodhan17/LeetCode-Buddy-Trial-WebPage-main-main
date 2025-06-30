import React from "react";

const CTASection = ({ githubRepoLink }) => (
  <section id="install" className="cta-section bg-light">
    <div className="container">
      <h2 className="cta-title">Ready to Transform Your Skills?</h2>
      <a
        href="#"
        className="cta-button-main"
        target="_blank"
        rel="noopener noreferrer"
      >
        Install Extension (Coming Soon!)
      </a>
      <div className="github-link-container">
        <p className="github-link-text">
          Want to see how it's built? Explore the source code:
        </p>
        <a
          href={githubRepoLink}
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
