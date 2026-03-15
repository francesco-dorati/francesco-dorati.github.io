import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <h1>~/projects <span className="blinking-cursor"></span></h1>
      
      <p style={{ marginTop: '1rem', marginBottom: '3rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        A deeper dive into the technical systems and robotics platforms I have worked on. Select any project to view detailed challenges and the full tech stack.
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '3rem', listStyle: 'none', padding: 0 }}>
        {projectsData.map((project) => (
          <li key={project.id} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.8rem',
            paddingBottom: '2rem',
            borderBottom: '1px dashed rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ margin: 0, fontSize: '1.4rem', letterSpacing: '0.5px' }}>
              <span className="prefix" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}>&gt;_</span>
              <Link to={`/projects/${project.id}`} style={{ 
                color: 'var(--text-primary)', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                {project.title}
              </Link>
            </h3>
            
            <div style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.9rem', 
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span className="prefix" style={{ color: 'var(--color-secondary)' }}>$</span> {project.role} <span style={{ opacity: 0.5 }}>|</span> {project.date}
            </div>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.6', 
              margin: '0.5rem 0',
              fontSize: '0.95rem'
            }}>
              {project.shortDescription}
            </p>
            
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              {project.techStack.map((tech, i) => (
                <span key={i} style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  [{tech}]
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
