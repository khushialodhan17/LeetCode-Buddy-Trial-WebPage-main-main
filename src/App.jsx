import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureBlock from "./components/FeatureBlock";
import VideoSection from "./components/VideoSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const App = () => {
  const youtubeVideoId = "qC8w0EF3u1U";
  const githubRepoLink = "https://github.com/khushialodhan17/LeetCode_Buddy-main/tree/main/LeetCode_Buddy-main";

  return (
    <div className="app-container">
      <Navbar githubRepoLink={githubRepoLink} />
      <HeroSection githubRepoLink={githubRepoLink} />

      <main className="main-content">
        <section className="section-common bg-dark">
          <div className="container">
            <h2 className="section-title">
              Make Sure Your Code is Interview Ready
            </h2>
          </div>
        </section>

        {/* Feature Block 1 */}
        <section className="section-common bg-light">
          <div className="container">
            <div className="feature-block">
              <div className="feature-block-content">
                <h2 className="feature-block-title">
                  LeetCode Buddy: Master Your Solutions
                </h2>
                <p className="feature-block-text">
                  Transform your LeetCode success into interview readiness with
                  smart AI insights. Our extension doesn't just check if your
                  code works — it helps you understand how to make it
                  exceptional.
                </p>
                <ul className="feature-block-list">
                  <li>
                    <span>✨</span> Get crystal-clear feedback on code quality,
                    structure, and readability — like a personal mentor
                    reviewing your code.
                  </li>
                  <li>
                    <span>✨</span> Instantly discover smarter naming
                    conventions and scalable design patterns used by top
                    developers.
                  </li>
                  <li>
                    <span>✨</span> Deep-dive into the time and space complexity
                    of your solution — know *how optimal* your logic really is.
                  </li>
                  <li>
                    <span>✨</span> Receive alternative approaches and
                    optimization tips to tackle problems from multiple angles
                    with confidence.
                  </li>
                </ul>
              </div>
              <div className="feature-block-image">
                <img src="images/imgfinal.png" alt="Code Review Feature" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block 2 */}
        <section className="section-common bg-dark">
          <div className="container">
            <div className="feature-block reverse">
              <div className="feature-block-content">
                <h2 className="feature-block-title">Interview QnA Buddy</h2>
                <p className="feature-block-text">
                  Go beyond solving problems — master them. Right after you
                  submit a solution on LeetCode, our AI jumps in to challenge
                  your understanding with interview-level questions that mirror
                  real-world expectations.
                </p>
                <ul className="feature-block-list">
                  <li>
                    <span>💡</span> Automatically generates thought-provoking
                    questions for every submitted solution.
                  </li>
                  <li>
                    <span>💡</span> Puts your knowledge to the test with
                    deep-dive conceptual questions that mimic top tech
                    interviews.
                  </li>
                  <li>
                    <span>💡</span> Highlights blind spots by exploring edge
                    cases, performance trade-offs, and alternative strategies.
                  </li>
                  <li>
                    <span>💡</span> The perfect tool for self-assessment, mock
                    interviews, and leveling up your problem-solving confidence.
                  </li>
                </ul>
              </div>
              <div className="feature-block-image">
                <img src="images/img8.png" alt="Interview QnA Feature" />
              </div>
            </div>
          </div>
        </section>

        {/* Icon Features */}
        <section id="benefits" className="section-common bg-light">
          <div className="container">
            <h2 className="section-title">
              Why LeetCode Buddy & Interview QnA?
            </h2>
            <div className="icon-feature-grid">
              <FeatureBlock
                icon="💡"
                title="AI-Powered Code Reviews"
                description="Get intelligent, in-depth feedback on your code's clarity, structure, and alignment with real-world best practices — like a senior dev watching your back."
              />
              <FeatureBlock
                icon="🎯"
                title="Smarter Solution Strategies"
                description="Uncover hidden inefficiencies, explore better algorithm choices, and learn how to write faster, cleaner, and more scalable code."
              />
              <FeatureBlock
                icon="🔒"
                title="Interview-Level Readiness"
                description="Simulate high-stakes interview scenarios with AI-generated questions that sharpen your thinking, uncover blind spots, and build rock-solid confidence."
              />
            </div>
          </div>
        </section>

        <VideoSection youtubeVideoId={youtubeVideoId} />
        <CTASection githubRepoLink={githubRepoLink} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
