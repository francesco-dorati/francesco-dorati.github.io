import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <h1 style={{ 
        color: 'var(--text-primary)', 
        borderBottom: 'none', 
        fontSize: '2.4rem', 
        margin: '0 0 1rem 0',
        letterSpacing: '-0.5px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{ marginRight: '0.6rem', fontWeight: 'normal' }}>~/</span>
        About Me
        <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
      </h1>
      
      <p style={{ marginTop: '1rem', marginBottom: '3rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        The human running behind the code.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        
        {/* Origin Section */}
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#5fb3b3', margin: '0 0 1rem 0', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span>
            THE ORIGIN
          </h3>
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>
              I grew up in a small town in Piedmont, Italy. At 12 years old, I bought my first computer—not just to use it, but to understand exactly how it worked. That raw curiosity cemented my path into computer engineering.
            </p>
            <p>
              When the 2020 lockdowns hit and I was 17, I threw myself into coding, building full-stack web applications from the ground up. But the real turning point happened at university: working on the <strong>FALCO Drone</strong> project. That was when I realized software is incredible, but software that interacts with the physical world is magic. I've been hooked on robotics ever since.
            </p>
          </div>
        </div>

        {/* UNITECH Section */}
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#fac863', margin: '0 0 1rem 0', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span>
            BEYOND BORDERS
          </h3>
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>
              As part of the <strong>UNITECH International Society</strong>, my perspective on engineering fundamentally shifted. The network helped me grow both personally and professionally, forcing me to look beyond the algorithmic code and ask the most important management question: <em>"Is this project actually useful?"</em>
            </p>
            <p>
              That international mindset was shaped by living and studying across Europe—from the streets of Lyon, to Helsinki, and an exchange in Barcelona. 
            </p>
          </div>
        </div>

        {/* Hobbies / Offline */}
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#c594c5', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span>
            SYSTEM IDLE_ (OFFLINE)
          </h3>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>⛰️</span>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>The Great Outdoors</strong>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  I spend my time away from the screen hiking, climbing, and snorkeling. I also did kickboxing throughout high school and am actively looking to get back into the ring.
                </p>
              </div>
            </li>

            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>📚</span>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Philosophy & Classics</strong>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  I have a deep love for classic literature and am currently diving heavily into Nietzsche. Put me in a room and I can talk for hours about philosophy, politics, and film. 
                </p>
              </div>
            </li>

            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>🎬</span>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Cinema</strong>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  I am a massive film enthusiast. I watch a lot of movies—so many, in fact, that I built a strictly-curated page just to log my absolute favorites! <Link to="/films" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>View my favorite films &rarr;</Link>
                </p>
              </div>
            </li>

            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>🍳</span>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Operating Modes</strong>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  At my core, I'm a bit of a night owl, but I actively work to maintain a healthy work-life balance. I also enjoy cooking—I wouldn't call myself an expert chef yet, but I love the process.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
}
