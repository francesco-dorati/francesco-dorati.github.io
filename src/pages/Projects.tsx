import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <h1>Projects & Research <span className="blinking-cursor"></span></h1>
      
      <p style={{ marginTop: '1rem', marginBottom: '3rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        An in-depth look at the technical systems and robotics platforms I have contributed to:
        {/* Click on any project to explore the challenges addressed and the complete technology stack. */}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', listStyle: 'none', padding: 0 }}>
        {projectsData.map((project) => (
          <li key={project.id} style={{ display: 'block' }}>
            <Link to={`/projects/${project.id}`} style={{ 
              textDecoration: 'none', 
              display: 'block'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                transition: 'transform 0.2s, background-color 0.2s, border-color 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateX(6px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.4rem', letterSpacing: '0.5px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span>
                      <span style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}>&gt;_</span>
                      {project.title}
                    </span>
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <div style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.85rem', 
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      $ {project.date}
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.9rem', 
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div><span style={{ color: 'var(--text-secondary)' }}>@</span> {project.company}</div>
                  {project.link && (
                    <>
                      <span style={{ opacity: 0.3 }}>|</span>
                      <span style={{ 
                        color: '#c594c5', 
                        backgroundColor: 'rgba(197, 148, 197, 0.1)',
                        border: '1px solid rgba(197, 148, 197, 0.3)',
                        fontSize: '0.75rem', 
                        fontFamily: 'var(--font-mono)', 
                        padding: '0.15rem 0.5rem', 
                        borderRadius: '4px',
                        fontWeight: 'bold'
                      }}>
                        PUBLICATION
                      </span>
                    </>
                  )}
                </div>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6', 
                  margin: '0.5rem 0 0 0',
                  fontSize: '0.95rem'
                }}>
                  {project.shortDescription}
                </p>
                
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                      color: 'var(--text-secondary)', 
                      padding: '0.3rem 0.6rem', 
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
