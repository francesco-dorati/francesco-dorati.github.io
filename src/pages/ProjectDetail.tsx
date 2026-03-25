import { useParams, Navigate, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <div style={{ marginBottom: '2rem' }}>
         <Link to="/projects" className="muted" style={{ textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
           ← cd ..
         </Link>
      </div>

      <div style={{ marginBottom: '2rem', borderBottom: '1px dashed var(--color-border)', paddingBottom: '1.5rem' }}>
        <h1 style={{ 
          color: '#ffffff', 
          borderBottom: 'none', 
          fontSize: '2.4rem', 
          margin: '0 0 0.8rem 0',
          letterSpacing: '-0.5px' 
        }}>
          <span style={{ color: '#6699cc', marginRight: '0.6rem', fontFamily: 'var(--font-mono)' }}>&gt;_</span>
          {project.title} 
          {' '}
          <span className="blinking-cursor"></span>
        </h1>
        <div style={{ 
          fontSize: '1.1rem', 
          color: 'var(--text-secondary)', 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          alignItems: 'center',
          fontFamily: 'var(--font-mono)' 
        }}>
          <span style={{ color: '#6699cc' }}>{project.company}</span>
          <span style={{ opacity: 0.3 }}>•</span>
          <span>{project.date}</span>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>PROJECT OVERVIEW</h2>
        {project.longDescription.map((desc, i) => (
          <p key={i} style={{ marginTop: '1rem', lineHeight: '1.6' }}>{desc}</p>
        ))}
      </div>

      {/* Project Media */}
      {project.media && project.media.length > 0 && (
        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {project.media.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center' }}>
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={item.description || `${project.title} media ${i + 1}`} 
                  style={{ width: '100%', maxWidth: '660px', maxHeight: '480px', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--color-border)' }} 
                />
              ) : (
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={item.url} 
                  style={{ width: '100%', maxWidth: '660px', maxHeight: '480px', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--color-border)' }} 
                >
                  Your browser does not support the video tag.
                </video>
              )}
              {item.description && (
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontStyle: 'italic', 
                  fontSize: '0.95rem', 
                  textAlign: 'center',
                  fontFamily: 'var(--font-mono)' 
                }}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* External Link / Publication */}
      {project.link && (
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--color-primary)', 
              color: 'var(--color-background)', 
              padding: '0.8rem 1.5rem', 
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontFamily: 'var(--font-mono)',
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
             VIEW PUBLICATION &rarr;
          </a>
        </div>
      )}

      <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div style={{ backgroundColor: 'color-mix(in srgb, var(--color-background), white 5%)', padding: '1.5rem', borderLeft: '4px solid #fac863' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#fac863', borderBottom: 'none', paddingBottom: 0, marginTop: 0, textTransform: 'uppercase' }}>toolkit</h2>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {project.techStack.map((tech, i) => (
              <span key={i} style={{ 
                backgroundColor: 'rgba(250, 200, 99, 0.1)', 
                color: '#fac863', 
                padding: '0.4rem 0.8rem', 
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                border: '1px solid rgba(250, 200, 99, 0.3)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div style={{ backgroundColor: 'color-mix(in srgb, var(--color-background), white 5%)', padding: '1.5rem', borderLeft: '4px solid #ec5f67' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#ec5f67', borderBottom: 'none', paddingBottom: 0, marginTop: 0, textTransform: 'uppercase' }}>technical hurdles</h2>
          <ul style={{ marginTop: '1.5rem', listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.challenges.map((challenge, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                <span style={{ color: '#ec5f67', fontFamily: 'var(--font-mono)' }}>&gt;</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.metrics && (
         <div style={{ marginTop: '2.5rem', backgroundColor: 'color-mix(in srgb, var(--color-background), white 5%)', padding: '1.5rem', borderLeft: '4px solid #99c794' }}>
            <h2 style={{ fontSize: '1.3rem', color: '#99c794', borderBottom: 'none', paddingBottom: 0, marginTop: 0, textTransform: 'uppercase' }}>results & metrics</h2>
            <ul style={{ marginTop: '1.5rem', listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
               {project.metrics.map((metric, i) => (
                 <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                   <span style={{ color: '#99c794', fontFamily: 'var(--font-mono)' }}>&gt;</span>
                   <span>{metric}</span>
                 </li>
               ))}
            </ul>
         </div>
      )}
    </div>
  );
}
