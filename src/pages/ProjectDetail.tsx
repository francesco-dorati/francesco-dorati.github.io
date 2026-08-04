import { useParams, Navigate } from 'react-router-dom';
import { projectsData, type ProjectMedia } from '../data/projects';
import { publications } from '../data/publications';
import { useScrollTracking, useSectionTracking } from '../components/Analytics';
import TrackedLink from '../components/TrackedLink';
import MarkdownLite, { MarkdownInline } from '../components/MarkdownLite';
import BackButton from '../components/BackButton';
import AuthorList from '../components/AuthorList';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useScrollTracking(project?.title || 'Project Detail');
  useSectionTracking({
    'proj-overview': 'Overview',
    'proj-publication': 'Publication',
    'proj-challenges': 'Challenges',
    'proj-metrics': 'Metrics'
  }, `Project: ${project?.title || 'Unknown'}`);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const renderMediaItem = (item: ProjectMedia, i: number) => (
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
  );

  // Each media item independently chooses to render before or after the description text (defaults to 'after').
  const beforeMedia = project.media?.filter(m => m.position === 'before') ?? [];
  const afterMedia = project.media?.filter(m => m.position !== 'before') ?? [];

  const beforeMediaBlock = beforeMedia.length > 0 ? (
    <div id="proj-media-before" style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {beforeMedia.map((item, i) => renderMediaItem(item, i))}
    </div>
  ) : null;

  const afterMediaBlock = afterMedia.length > 0 ? (
    <div id="proj-media-after" style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {afterMedia.map((item, i) => renderMediaItem(item, i))}
    </div>
  ) : null;

  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <BackButton to="/projects" label="Back to Projects" />

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
        {project.techStack && project.techStack.length > 0 && (
          <div style={{ marginTop: '0.7rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.techStack.map((tech, i) => (
              <span key={i} style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                padding: '0.3rem 0.7rem',
                fontFamily: 'var(--font-mono)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Media items with position: 'before' render here */}
      {beforeMediaBlock}

      <div id="proj-overview" style={{ marginTop: '2rem' }}>
        <h2>PROJECT OVERVIEW</h2>
        {project.longDescription.map((desc, i) => (
          <MarkdownLite key={i} text={desc} />
        ))}
      </div>

      {/* Media items with position: 'after' (or unset) render here */}
      {afterMediaBlock}

      <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* Formal Publication(s) */}
        {project.publicationIds && project.publicationIds.length > 0 && (
          <div id="proj-publication" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderLeft: '4px solid #6699cc' }}>
            <h2 style={{ fontSize: '1.3rem', color: '#6699cc', borderBottom: 'none', paddingBottom: 0, marginTop: 0, textTransform: 'uppercase' }}>
              {project.publicationIds.length > 1 ? 'Formal Publications' : 'Formal Publication'}
            </h2>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {project.publicationIds.map((pubId) => {
                const pub = publications.find(p => p.id === pubId);
                if (!pub) return null;

                return (
                  <div key={pubId}>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                      <MarkdownInline text={pub.title} />
                    </div>

                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.6rem', lineHeight: '1.5' }}>
                      <AuthorList authors={pub.authors} />
                    </div>

                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.2rem', fontFamily: 'var(--font-mono)' }}>
                      {pub.publisher} <span style={{ opacity: 0.3, margin: '0 0.5rem' }}>|</span> {pub.year}
                      {pub.status === 'UNDER_REVIEW' && (
                        <>
                          <span style={{ opacity: 0.3, margin: '0 0.5rem' }}>|</span>
                          <span style={{ color: '#fac863' }}>UNDER REVIEW</span>
                        </>
                      )}
                    </div>

                    {pub.link && (
                      <TrackedLink
                        href={pub.link}
                        label={`Publication: ${pub.title}`}
                        category="outbound"
                        context="Project Detail Publication"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#6699cc',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.9rem',
                          fontWeight: 'bold'
                        }}>
                        VIEW PUBLICATION &rarr;
                      </TrackedLink>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div id="proj-challenges" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderLeft: '4px solid #ec5f67' }}>
            <h2 style={{ fontSize: '1.3rem', color: '#ec5f67', borderBottom: 'none', paddingBottom: 0, marginTop: 0, textTransform: 'uppercase' }}>challenges</h2>
            <ul style={{ marginTop: '1.5rem', listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.challenges.map((challenge, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  <span style={{ color: '#ec5f67', fontFamily: 'var(--font-mono)' }}>&gt;</span>
                  <span><MarkdownInline text={challenge} /></span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.metrics && (
          <div id="proj-metrics" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderLeft: '4px solid #99c794' }}>
            <h2 style={{ fontSize: '1.3rem', color: '#99c794', borderBottom: 'none', paddingBottom: 0, marginTop: 0, textTransform: 'uppercase' }}>results & metrics</h2>
            <ul style={{ marginTop: '1.5rem', listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
               {project.metrics.map((metric, i) => (
                 <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                   <span style={{ color: '#99c794', fontFamily: 'var(--font-mono)' }}>&gt;</span>
                   <span><MarkdownInline text={metric} /></span>
                 </li>
               ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
