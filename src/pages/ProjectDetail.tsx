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

      <h1 style={{ color: 'var(--color-primary)', borderBottom: 'none' }}>{project.title} <span className="blinking-cursor"></span></h1>
      <div className="muted" style={{ fontSize: '1.1em', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <span><strong>Role:</strong> {project.role}</span>
        <span>|</span>
        <span><strong>Timeline:</strong> {project.date}</span>
      </div>

      {project.link && (
        <div style={{ marginBottom: '2rem' }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ 
              border: '1px dashed #fac863', 
              color: '#fac863', 
              padding: '0.5rem 1rem', 
              textDecoration: 'none',
              display: 'inline-block',
              fontFamily: 'var(--font-mono)'
            }}>
             [External Link / Publication]
          </a>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h2>SYSTEM OVERVIEW</h2>
        {project.longDescription.map((desc, i) => (
          <p key={i} style={{ marginTop: '1rem', lineHeight: '1.6' }}>{desc}</p>
        ))}
      </div>

      <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div>
          <h2>CORE TECH STACK</h2>
          <ul style={{ marginTop: '1rem', listStyleType: 'square', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2>KEY CHALLENGES</h2>
          <ul style={{ marginTop: '1rem', listStyleType: 'circle', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            {project.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>

      {project.metrics && (
         <div style={{ marginTop: '3rem', backgroundColor: 'color-mix(in srgb, var(--color-background), white 5%)', padding: '1.5rem', borderLeft: '4px solid #99c794' }}>
            <h2 style={{ borderBottom: 'none', paddingBottom: 0, marginTop: 0, color: '#99c794' }}>RESULTS & METRICS</h2>
            <ul style={{ marginTop: '1rem', listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
               {project.metrics.map((metric, i) => (
                 <li key={i}>{metric}</li>
               ))}
            </ul>
         </div>
      )}

      {/* Placeholder for future images/videos */}
      <div style={{ marginTop: '4rem', padding: '2rem', border: '1px dashed var(--color-border)', textAlign: 'center', opacity: 0.5 }}>
         <p style={{ fontFamily: 'var(--font-mono)' }}>[ media_placeholder.png ]</p>
         <p style={{ fontSize: '0.9em', marginTop: '0.5rem' }}>Awaiting images or video links</p>
      </div>
    </div>
  );
}
