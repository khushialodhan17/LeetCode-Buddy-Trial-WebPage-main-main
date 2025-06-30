import React from "react";

const FeatureBlock = ({ title, description, features, aiNote, icon }) => (
  <div className="icon-feature-item">
    {icon && <span className="icon-feature-item-icon">{icon}</span>}
    <h3>{title}</h3>
    <p>{description}</p>
    {features && (
      <ul className="feature-block-list">
        {features.map((feature, index) => (
          <li key={index}>
            <span>✦</span> {feature}
          </li>
        ))}
      </ul>
    )}
    {aiNote && <p className="ai-note">*{aiNote}</p>}
  </div>
);

export default FeatureBlock;
