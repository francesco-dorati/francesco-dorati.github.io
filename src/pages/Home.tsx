import { Link } from 'react-router-dom';
import { homeContent } from '../data/worldview';
import { projectsData } from '../data/projects';
import { currentFocus } from '../data/learning';

export default function Home() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in', paddingBottom: '4rem' }}>
      
      {/* 1. HERO SECTION */}
      <header className="section" style={{ marginBottom: '4rem' }}>
        <h1 style={{ 
          color: 'var(--text-primary)', 
          borderBottom: 'none', 
          fontSize: '2rem', 
          margin: '0 0 1rem 0',
          letterSpacing: '-0.5px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* <span style={{ marginRight: '0.6rem', fontWeight: 'normal' }}>~/</span> */}
          Hi, I'm Francesco
          <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
        </h1>
        
        <div style={{ maxWidth: '700px' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
            <span style={{ marginRight: '0.6rem' }}>🛠️</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>{homeContent.role}</span>
            <span style={{color: 'var(--text-secondary)'}}> focusing on </span>
            {homeContent.tagline}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
            <span style={{ marginRight: '0.6rem' }}>🎓</span>
            {homeContent.education}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
            <span style={{ marginRight: '0.6rem' }}>{homeContent.locationEmoji}</span>
            Currently in {homeContent.location}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.8rem', lineHeight: '1.4' }}>
            <span style={{ marginRight: '0.6rem' }}>🇮🇹​</span>
            From Italy
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.5rem' }}>
            {homeContent.socialLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-mono)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(138, 180, 248, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(138, 180, 248, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>&gt;_</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* 2. MAIN PROJECTS (Experience) */}
      <section className="section" style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#8ab4f8', margin: 0, fontFamily: 'var(--font-mono)' }}>
            MAIN PROJECTS
          </h3>
        </div>

        <div className="worldview-grid-3">
          {projectsData.slice(0, 3).map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              padding: '1.5rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(138, 180, 248, 0.4)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}
            >
              <div style={{ fontSize: '0.7rem', color: '#8ab4f8', fontFamily: 'var(--font-mono)' }}>[ {project.company.toUpperCase()} ]</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>{project.title}</div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                {project.shortDescription}
              </p>
              <div style={{ fontSize: '0.8rem', color: '#8ab4f8', marginTop: '0.5rem' }}>DETAILS &rarr;</div>
            </Link>
          ))}

          {/* Full-width "View All" card */}
          <Link to="/projects" className="grid-column-span-3" style={{ 
            backgroundColor: 'transparent',
            border: '1px dashed rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '1.2rem',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#8ab4f8',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8rem'
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(138, 180, 248, 0.4)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            VIEW ALL PROJECTS &rarr;
          </Link>
        </div>
      </section>

      {/* 3. CORE_DIRECTIVES (Technical Skills) */}
      <section className="section" style={{ marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#fac863', margin: '0 0 2rem 0', fontFamily: 'var(--font-mono)' }}>
          RESEARCH INTERESTS
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          {/* Research Focus Area Cards */}
          {currentFocus.slice(0, 2).map((focus, i) => (
            <div key={`focus-${i}`} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(250, 200, 99, 0.2)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{focus.icon}</span>
                <div style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 'bold', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>
                  {focus.title.toUpperCase()}
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginTop: '0.5rem'
              }}>
                {focus.bullets.map((bullet, j) => (
                  <span key={j} style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full-width "Explore Learning" card */}
        <Link to="/learning" style={{ 
          backgroundColor: 'transparent',
          border: '1px dashed rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1.2rem',
          textAlign: 'center',
          textDecoration: 'none',
          color: '#fac863',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.8rem',
          marginTop: '1.5rem'
        }}
        onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(250, 200, 99, 0.4)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'; }}
        onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          VIEW LEARNING PATH &rarr;
        </Link>
      </section>

      {/* 4. SYSTEM_RESOURCES (Grid Navigation) */}
      <section className="section" style={{ marginTop: '5rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', margin: '0 0 2.5rem 0', fontFamily: 'var(--font-mono)' }}>
          RESOURCES
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '1.2rem' 
        }}>
          {[
            { path: '/projects', label: 'EXPERIENCE', sub: 'ENGINEERING ARCHIVE', color: '#8ab4f8' },
            { path: '/learning', label: 'KNOWLEDGE', sub: 'TECHNICAL ROADMAP', color: '#fac863' },
            { path: '/about', label: 'IDENTITY', sub: 'PROFILE & HISTORY', color: '#c594c5' },
          ].map((item, i) => (
            <Link key={i} to={item.path} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              padding: '1.5rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '0.7rem', color: item.color, fontFamily: 'var(--font-mono)' }}>[ {item.sub} ]</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.5px' }}>{item.label}</div>
              <div style={{ fontSize: '0.8rem', color: item.color, marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>ACCESS &rarr;</div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
