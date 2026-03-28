import { Link } from 'react-router-dom';
import { books, coreIdeas, profileStats, timelineEvents, coreValues } from '../data/worldview';

export default function About() {
  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in', paddingBottom: '4rem' }}>
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
        A high-level view of my journey, ethics, and offline interests.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* 1. SYSTEM_PROFILE (Stats Box) */}
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          borderRadius: '12px', 
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          fontFamily: 'var(--font-mono)'
        }}>
          {profileStats.map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>[ {stat.label} ]</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* 2. CHRONICLE (Timeline) */}
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#5fb3b3', margin: '0 0 2rem 0', fontFamily: 'var(--font-mono)' }}>
            {/* <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span> */}
            TIMELINE
          </h3>
          
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {timelineEvents.map((event, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div className="timeline-dot" />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#5fb3b3', fontWeight: 'bold' }}>
                      {event.year}
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                      {event.title}
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '600px' }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. SYSTEM IDLE_ (OFFLINE) */}
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#fac863', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span>
            SYSTEM IDLE_ (OFFLINE)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', transition: 'all 0.2s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(250, 200, 99, 0.3)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⛰️</span>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>The Great Outdoors</strong>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Hiking and climbing. Offline time is spent exploring landscapes and pushing physical limits.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', transition: 'all 0.2s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(250, 200, 99, 0.3)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🍳</span>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Operating Modes</strong>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Night-owl productivity, home cooking, and maintaining a healthy work-life sync.
              </p>
            </div>
          </div>
        </div>

        {/* 4. CINEMA */}
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#fac863', margin: '0 0 1rem 0', fontFamily: 'var(--font-mono)' }}>
            {/* <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span> */}
            CINEMA
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.1', margin: '0 0 1.5rem 0' }}>
            Deeply passionate about film aesthetics, cinematography, and storytelling.
          </p>
          <Link to="/films" style={{ color: '#fac863', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
            VIEW CURATED FAVORITES &rarr;
          </Link>
        </div>

        {/* 5. THE LIBRARY */}
        <div id="library">
          <h3 style={{ fontSize: '1.3rem', color: '#8ab4f8', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
            {/* <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span> */}
            LIBRARY
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.1', margin: '0 0 1.5rem 0' }}>
            Exploring the intersections of systems, ethics, and human nature through curated reading.
          </p>
          <div className="worldview-grid-3" style={{ marginBottom: '1.5rem' }}>
            {books.slice(0, 3).map(book => (
              <div key={book.id} style={{ padding: '1.2rem', backgroundColor: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{book.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{book.author}</div>
                <div style={{ marginTop: '0.8rem', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#8ab4f8', opacity: 0.8, textTransform: 'uppercase' }}>{book.category}</div>
              </div>
            ))}
          </div>
          <Link to="/library" style={{ color: '#8ab4f8', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
            VIEW COMPLETE COLLECTION &rarr;
          </Link>
        </div>

        {/* 6. PHILOSOPHY & ETHICS */}
        <div id="philosophy">
          <h3 style={{ fontSize: '1.3rem', color: '#99c794', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
            {/* <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span> */}
            VALUES & PHILOSOPHY
          </h3>
          
          {/* Core Values Grid (Using responsive class worldview-grid-3) */}
          <div className="worldview-grid-3">
            {coreValues.map((value, i) => (
              <div key={i} style={{ 
                padding: '1.5rem', 
                backgroundColor: 'rgba(153, 199, 148, 0.02)', 
                border: '1px solid rgba(153, 199, 148, 0.1)', 
                borderRadius: '8px' 
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{value.emoji}</div>
                <div style={{ 
                  fontSize: '1rem', 
                  fontWeight: 'bold', 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.5rem', 
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.5px'
                }}>
                  {value.label}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '3rem' }}>
                  {value.text}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: 'rgba(153, 199, 148, 0.02)', border: '1px solid rgba(153, 199, 148, 0.05)', borderRadius: '8px', fontFamily: 'var(--font-mono)', position: 'relative' }}>
            <div style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8', whiteSpace: 'pre-wrap', marginBottom: '1.5rem' }}>"{coreIdeas[0].text}"</div>
            <div style={{ textAlign: 'right', fontSize: '0.85rem', color: 'var(--text-muted)' }}>— {coreIdeas[1].source}</div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/philosophy" style={{ color: '#99c794', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
              DEEP DIVE INTO WORLDVIEW (VIEW ALL IDEAS) &rarr;
            </Link>
          </div>
        </div>

        {/* 7. CAPITAL & FINANCE */}
        <div id="finance">
          <h3 style={{ fontSize: '1.3rem', color: '#c594c5', margin: '0 0 1rem 0', fontFamily: 'var(--font-mono)' }}>
            {/* <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span> */}
            MONEY MANAGEMENT & FINANCE
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1.5rem 0', maxWidth: '600px' }}>
            I believe it is extremely important to manage money correctly, focus on long-term compounding, and build financial resilience.
          </p>
          <div style={{ display: 'inline-block', padding: '0.8rem 1.2rem', backgroundColor: 'rgba(197, 148, 197, 0.1)', border: '1px solid rgba(197, 148, 197, 0.2)', borderRadius: '8px', color: '#c594c5', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', opacity: 0.8 }}>
            [ LOG: Financial Philosophy & Asset Management — Coming Soon ]
          </div>
        </div>

      </div>
    </div>
  );
}
