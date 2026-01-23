import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/projects/blackformal.png";


function Hero() {
  return (
    <section id="home" className ="hero">
      {/* Left Social Bar */}
      <div className="social-rail">
    
   
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="welcome">Hey Welcome !</h1>

          <div className="intro-line">
            <span className="im-text">I'm</span>
            <span className="name-pill">
              Usha Sai Kiran 
            </span>
          </div>

          <h2 className="role">Data Scientist</h2>

          <p className="subtitle">
         I design and build predictive models and advanced analytics solutions to solve real business problems.I analyze large, complex datasets using statistical methods and machine learning, run experiments to validate hypotheses, and uncover actionable insights.
          </p>

       {/*}   <div className="hero-mini-icons">
            <FaGithub />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
*/}
          <div className="hero-buttons">
            <button className="btn primary"
  onClick={() =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }
>
  Contact me</button>

          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-circle">
           <img src={profile} alt="Profile" className="avatar-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
