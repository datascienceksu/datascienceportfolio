import {
  FaChartBar,
  FaPython,
  FaDatabase,
  FaProjectDiagram,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import "./WhatIDo.css";

// ✅ add this import (path must match your file)
import geminiformalandworkingImg from "../assets/whatido/geminiformalandworking.png";

function WhatIDo() {
  return (
    <section className="whatido" id="what-i-do">
      <h2 className="whatido-title">What I Do?</h2>

      <div className="whatido-grid">
        <div className="whatido-illustration">
          <div className="illus-card">

            {/* ✅ NEW: image area (top-right corner) */}
            <div className="illus-media">
              <img src={geminiformalandworkingImg} alt="Analytics illustration" loading="lazy" />
            </div>

            <div className="illus-stat">
              <h4>+45%</h4>
              <p>Prediction Accuracy Improvement</p>
            </div>
            <div className="illus-stat">
              <h4>80+</h4>
              <p>Models & Experiments Deployed</p>
            </div>
            <div className="illus-stat">
              <h4>12M+</h4>
              <p>Data Points Analyzed</p>
            </div>
          </div>
        </div>

        <div className="whatido-right">
          <h3 className="whatido-heading">
            Applied Data Science  & <br /> Machine Learning
          </h3>

          <div className="whatido-icons">
            <div className="whatido-icon"><FaChartBar /></div>
            <div className="whatido-icon"><FaPython /></div>
            <div className="whatido-icon"><FaDatabase /></div>
            <div className="whatido-icon"><FaProjectDiagram /></div>
            <div className="whatido-icon"><FaCloud /></div>
            <div className="whatido-icon"><FaCogs /></div>
          </div>

          <ul className="whatido-list">
            <li>Builds predictive and machine learning models to solve complex business problems</li>
            <li>Performs statistical analysis and experimentation to uncover patterns and insights</li>
            <li>Develops data-driven solutions using Python, SQL, and ML frameworks</li>
            <li>Partners with product and business teams to translate insights into action</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
