import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header className="section">
        <h1>Hi, I'm Francesco <span className="blinking-cursor"></span></h1>
        <p>
          <span className="highlight">🛠️ Robotics Engineer</span> focusing on Physical AI & Reinforcement Learning
        </p>
        <p>🎓 MSc Computer Science and Engineering @ Politecnico di Milano</p>
        <p>🇮🇹 Based in Milan, Italy</p>
        
        <ul style={{ marginTop: '1rem' }}>
          <li>
            <span className="prefix">&gt;_</span>
            <span className="content">
              <a href="mailto:fd.francescodorati@gmail.com">fd.francescodorati@gmail.com</a>
            </span>
          </li>
          <li>
            <span className="prefix">&gt;_</span>
            <span className="content">
              <a href="https://github.com/francesco-dorati" target="_blank" rel="noopener noreferrer">github.com/francesco-dorati</a>
            </span>
          </li>
          <li>
            <span className="prefix">&gt;_</span>
            <span className="content">
              <a href="https://linkedin.com/in/francesco-dorati" target="_blank" rel="noopener noreferrer">in/francesco-dorati</a>
            </span>
          </li>
        </ul>
      </header>

      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <h2>EXPERIENCE & RESEARCH</h2>
          <Link to="/projects" className="muted" style={{ textDecoration: 'none', fontSize: '0.9em' }}>[View All Projects]</Link>
        </div>
        <ul>
          <li>
            <span className="prefix">$_</span>
            <span className="content">
              <Link to="/projects/agv-robot" style={{ color: 'inherit', textDecoration: 'none' }}><span className="highlight" style={{ cursor: 'pointer' }}>AGV Robot and Artificial Vision</span></Link> / DevNut
              <div className="muted" style={{ fontSize: '0.9em', marginTop: '0.2rem' }}>Jan 2026 – Present | Remote</div>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                Developing a computer vision-based navigation system for autonomous ground vehicles (AGV), replacing traditional ground-line sensors and enabling autonomous navigation in simulated environments.
              </p>
            </span>
          </li>
          <li>
            <span className="prefix">$_</span>
            <span className="content">
              <Link to="/projects/unitree-g1" style={{ color: 'inherit', textDecoration: 'none' }}><span className="highlight" style={{ cursor: 'pointer' }}>ML/Robotics Engineer - Humanoid Robot</span></Link> / Politecnico di Milano
              <div className="muted" style={{ fontSize: '0.9em', marginTop: '0.2rem' }}>Sept 2025 – Present | Milan, Italy</div>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                Implementing state-of-the-art RL approaches for Unitree G1. Integrating scene reconstruction pipelines (real-to-sim) and training locomotion models using imitation learning. Tested behaviors on the physical robot.
              </p>
            </span>
          </li>
          <li>
            <span className="prefix">$_</span>
            <span className="content">
              <Link to="/projects/falco-drone" style={{ color: 'inherit', textDecoration: 'none' }}><span className="highlight" style={{ cursor: 'pointer' }}>Software Engineer - FALCO Autonomous Drone</span></Link> / Politecnico di Milano
              <div className="muted" style={{ fontSize: '0.9em', marginTop: '0.2rem' }}>Nov 2023 – Feb 2025 | Milan, Italy</div>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                Developed a novel C++ path planning algorithm for autonomous drone navigation in 3D environments. Achieved 85% faster initial path discovery and 78% reduction in memory usage.
              </p>
            </span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>EDUCATION</h2>
        <ul>
          <li>
            <span className="prefix">|_</span>
            <span className="content">
              <span className="highlight">Politecnico di Milano</span> (2025 - Present)
              <br />MSc Computer Science and Engineering - AI Specialization
            </span>
          </li>
          <li style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            <span className="prefix">|_</span>
            <span className="content">
              <span className="highlight">UPC Barcelona</span> (Feb - Jun 2026)
              <br />MSc Artificial Intelligence (UNITECH Exchange)
            </span>
          </li>
          <li>
            <span className="prefix">|_</span>
            <span className="content">
              <span className="highlight">Politecnico di Milano</span> (2022 - 2025)
              <br />BSc Computing Systems Engineering - Final Grade: 100/110
            </span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>PUBLICATIONS & HONORS</h2>
        <ul>
          <li>
            <span className="prefix">📄</span>
            <span className="content">
               <a href="https://doi.org/10.1109/ROBOT61475.2024.10796871" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                 <span className="highlight" style={{ cursor: 'pointer' }}>Optimizing Initial Path Finding in Informed-RRT* with a Novel Map-Adaptive Sampling Technique</span>
               </a>
               <div className="muted" style={{ fontSize: '0.9em', marginTop: '0.2rem' }}>7th Iberian Robotics Conference (ROBOT 2024), IEEE Xplore | DOI: 10.1109/ROBOT61475.2024.10796871</div>
            </span>
          </li>
          <li style={{ marginTop: '1rem' }}>
            <span className="prefix">🏆</span>
            <span className="content">
               <span className="highlight">TEF Ignition Program</span> (2025)
               <br />Selected for a 7-week entrepreneurship program with training and grant support.
            </span>
          </li>
          <li>
            <span className="prefix">🏆</span>
            <span className="content">
               <span className="highlight">Tiny_Hack Competition - 3rd place</span> (2025)
               <br />Hackathon focused on embedded computer vision on microcontrollers.
            </span>
          </li>
          <li>
            <span className="prefix">🏆</span>
            <span className="content">
               <span className="highlight">Best Freshmen Award</span> (2023)
               <br />Awarded for remarkable performance during the first year of studies at PoliMi.
            </span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>TECHNICAL SKILLS</h2>
        <div className="code-block">
          <code>
            <span style={{ color: '#c594c5' }}>AI & ML:</span> PyTorch, TensorFlow, Scikit-learn, Model Quantization<br/>
            <span style={{ color: '#99c794' }}>Computer Vision:</span> OpenCV, YOLO, Image Segmentation, Object Tracking, Sensor Fusion<br/>
            <span style={{ color: '#fac863' }}>Robotics & Sim:</span> ROS/ROS2, RL (Actor–Critic, PPO), Gazebo, Isaac Sim, MuJoCo<br/>
            <span style={{ color: '#6699cc' }}>Hardware:</span> VHDL, Digital Logic (FSMs), FPGA Design, Basic PCB Design<br/>
            <span style={{ color: '#f99157' }}>Languages:</span> Python, C++, C, Java, MATLAB, SQL<br/>
            <span style={{ color: '#ec5f67' }}>DevOps & Tools:</span> Linux, Docker, Git, Edge Deployment, RPi, Arduino
          </code>
        </div>
      </section>
    </>
  );
}
