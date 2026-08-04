import { Link } from 'react-router-dom';
import { publications } from '../data/publications';
import { projectsData } from '../data/projects';
import TrackedLink from '../components/TrackedLink';
import { MarkdownInline } from '../components/MarkdownLite';
import AuthorList from '../components/AuthorList';
import { homeContent } from '../data/worldview';
import { useScrollTracking } from '../components/Analytics';

export default function Publications() {
  useScrollTracking('Publications');

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
        Publications
        <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
      </h1>

      <p style={{ marginTop: '1rem', marginBottom: '2rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        Peer-reviewed papers and research work I have co-authored, spanning robotics navigation and computer vision.
      </p>

      {(() => {
        const scholarUrl = homeContent.socialLinks.find(l => l.type === 'scholar')?.url;
        return scholarUrl ? (
          <TrackedLink
            href={scholarUrl}
            label="Social: Scholar"
            category="outbound"
            context="Publications Page Top"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '1rem 1.5rem',
              backgroundColor: 'transparent',
              border: '1px dashed rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '3rem',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            Google Scholar &rarr;
          </TrackedLink>
        ) : null;
      })()}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {publications.map((pub) => {
          const relatedProject = projectsData.find(p => p.publicationIds?.includes(pub.id));

          return (
            <div key={pub.id} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.8rem',
              borderLeft: '4px solid #6699cc',
              transition: 'border-color 0.2s ease, background-color 0.2s ease'
            }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.9rem' }}>
                <span style={{
                  fontSize: '0.7rem',
                  color: '#6699cc',
                  backgroundColor: 'rgba(102, 153, 204, 0.1)',
                  border: '1px solid rgba(102, 153, 204, 0.3)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 'bold'
                }}>
                  {pub.type}
                </span>
                {pub.status === 'UNDER_REVIEW' ? (
                  <span style={{
                    fontSize: '0.7rem',
                    color: '#fac863',
                    backgroundColor: 'rgba(250, 200, 99, 0.1)',
                    border: '1px solid rgba(250, 200, 99, 0.3)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 'bold'
                  }}>
                    UNDER REVIEW
                  </span>
                ) : (
                  <span style={{
                    fontSize: '0.7rem',
                    color: '#99c794',
                    backgroundColor: 'rgba(153, 199, 148, 0.1)',
                    border: '1px solid rgba(153, 199, 148, 0.3)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 'bold'
                  }}>
                    PUBLISHED
                  </span>
                )}
              </div>

              <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.4', marginBottom: '0.6rem' }}>
                <MarkdownInline text={pub.title} />
              </div>

              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.7rem', lineHeight: '1.5' }}>
                <AuthorList authors={pub.authors} />
              </div>

              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.3rem', fontFamily: 'var(--font-mono)' }}>
                {pub.publisher} <span style={{ opacity: 0.3, margin: '0 0.5rem' }}>|</span> {pub.year}
              </div>

              {pub.link && (
                <div style={{ marginBottom: relatedProject ? '1rem' : 0 }}>
                  <TrackedLink
                    href={pub.link}
                    label={`Publication: ${pub.title}`}
                    category="outbound"
                    context="Publications Page"
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
                </div>
              )}

              {relatedProject && (
                <div>
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      padding: '0.4rem 0.8rem',
                      border: '1px dashed rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}>
                    &#128736; Related project: {relatedProject.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
