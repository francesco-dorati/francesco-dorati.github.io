export default function About() {
  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <h1>~/about <span className="blinking-cursor"></span></h1>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>THE HUMAN BEHIND THE ROBOTS</h2>
        <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
          I am Francesco, a Robotics Engineer fascinated by how we can teach machines to interact with the physical world. While my professional life revolves around C++, ROS, and training reinforcement learning policies, my interests extend far beyond the lab.
        </p>

        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>My Philosophy</h3>
        <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
          I believe that the best roboticists are generalists. Building a robot requires understanding the mechanical constraints, the electronic nervous system, and the software brain. I strive to understand the full stack, refusing to treat hardware as a "black box" or software as "just someone else's problem."
        </p>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>WHEN I'M NOT CODING</h2>
        <ul style={{ marginTop: '1rem' }}>
          <li style={{ marginBottom: '1.5rem' }}>
            <span className="prefix" style={{ color: '#fac863' }}>⛰️</span>
            <span className="content">
              <strong style={{ color: 'var(--color-secondary)' }}>Mountaineering & Hiking</strong>
              <p style={{ marginTop: '0.5rem' }}>
                Growing up near the Alps, I spend most of my weekends attempting to reach high altitudes. The problem-solving required on a difficult climb often mirrors debugging a complex system: methodical, patient, and occasionally terrifying.
              </p>
            </span>
          </li>
          
          <li style={{ marginBottom: '1.5rem' }}>
            <span className="prefix" style={{ color: '#99c794' }}>🖨️</span>
            <span className="content">
              <strong style={{ color: 'var(--color-secondary)' }}>3D Printing & Prototyping</strong>
              <p style={{ marginTop: '0.5rem' }}>
                I maintain a small farm of 3D printers at home. Currently experimenting with printing structural components in Polycarbonate and TPU for custom drone frames. 
              </p>
            </span>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            <span className="prefix" style={{ color: '#c594c5' }}>🎸</span>
            <span className="content">
              <strong style={{ color: 'var(--color-secondary)' }}>Music Production</strong>
              <p style={{ marginTop: '0.5rem' }}>
                I enjoy messing around with synthesizers and DAWs. The intersection of math, frequencies, and art is incredibly interesting to me.
              </p>
            </span>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem', borderTop: '1px dashed #6699cc', paddingTop: '2rem' }}>
        <p className="muted" style={{ textAlign: 'center' }}>
          "The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science."
          <br/>
          <span style={{ fontSize: '0.8em' }}>- Albert Einstein</span>
        </p>
      </div>
    </div>
  );
}
