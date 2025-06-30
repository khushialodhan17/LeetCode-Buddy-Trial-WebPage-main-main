import React from "react";

const VideoSection = ({ youtubeVideoId }) => (
  <section id="demo" className="video-section bg-dark">
    <div className="container">
      <h2 className="section-title">See It In Action!</h2>
      <div className="video-player-container">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          title="Extension Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="cta-text">
        Watch this short demo video to understand how to seamlessly integrate
        the LeetCode Buddy & Interview QnA extension into your coding and
        interview preparation workflow.
      </p>
    </div>
  </section>
);

export default VideoSection;
