import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useScrollTracking } from '../components/Analytics';

export default function Projects() {
  useScrollTracking('Projects List');

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
        Projects & Research
        <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
      </h1>

      <p style={{ marginTop: '1rem', marginBottom: '3rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        An in-depth look at the technical systems and robotics platforms I have contributed to:
        {/* Click on any project to explore the challenges addressed and the complete technology stack. */}
      </p>

      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        listStyle: 'none',
        padding: 0
      }}>
        {projectsData.map((project) => (
          <li id={`project-card-${project.id}`} key={project.id} style={{ display: 'block' }}>
            <Link to={`/projects/${project.id}`} style={{
              textDecoration: 'none',
              display: 'block',
              height: '100%'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.2s, background-color 0.2s, border-color 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {project.titleImage && (
                  <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/\.(mp4|webm|mov|ogg)$/i.test(project.titleImage) ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={project.titleImage}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={project.titleImage}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                  </div>
                )}

                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '1.18rem', letterSpacing: '0.3px', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                    <span style={{ color: 'var(--color-primary)', marginRight: '0.4rem' }}>&gt;_</span>
                    {project.title}
                  </h3>

                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.83rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{project.company}</span>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <span>{project.date}</span>
                    {project.publicationIds && project.publicationIds.length > 0 && (
                      <span style={{
                        color: '#c594c5',
                        backgroundColor: 'rgba(197, 148, 197, 0.1)',
                        border: '1px solid rgba(197, 148, 197, 0.3)',
                        fontSize: '0.65rem',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                      }}>
                        PUBLICATION
                      </span>
                    )}
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    margin: 0,
                    fontSize: '0.85rem',
                    flex: 1
                  }}>
                    {project.shortDescription}
                  </p>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        color: 'var(--text-secondary)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
