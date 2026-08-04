import { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../data/worldview';
import { projectsData } from '../data/projects';
import { publications } from '../data/publications';
import { newsEntries } from '../data/news';
import TrackedLink from '../components/TrackedLink';
import { MarkdownInline } from '../components/MarkdownLite';
import { useScrollTracking, useSectionTracking, trackEvent } from '../components/Analytics';

export default function Home() {
  const [showAllNews, setShowAllNews] = useState(false);

  useScrollTracking('Home');
  useSectionTracking({
    'home-news': 'News',
    'home-projects': 'Main Projects',
    'home-publications': 'Publications'
  }, 'Home');

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in', paddingBottom: '4rem' }}>
      
      {/* 1. HERO SECTION */}
      <header id="home-hero" className="section" style={{ marginBottom: '3rem' }}>
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
            <TrackedLink
              href={homeContent.cvUrl}
              label="Download CV"
              category="outbound"
              context="Home Hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(138, 180, 248, 0.12)',
                border: '1px solid rgba(138, 180, 248, 0.4)',
                borderRadius: '8px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 'bold',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(138, 180, 248, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(138, 180, 248, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>&darr;</span> Download CV
            </TrackedLink>
            {homeContent.socialLinks.map((link, i) => (
              <TrackedLink 
                key={i} 
                href={link.url} 
                label={`Social: ${link.label}`}
                category="outbound"
                context="Home Hero"
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
              </TrackedLink>
            ))}
          </div>
        </div>
      </header>

      {/* NEWS (title + date on one row, description below) */}
      <section id="home-news" className="section" style={{ marginBottom: '3.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#fac863', margin: '0 0 1.4rem 0', fontFamily: 'var(--font-mono)' }}>
          NEWS
        </h3>

        <div style={{ position: 'relative', paddingLeft: '1.6rem', maxWidth: '650px' }}>
          <div style={{
            position: 'absolute',
            left: '5px',
            top: '4px',
            bottom: '4px',
            width: '1px',
            backgroundColor: 'rgba(250, 200, 99, 0.25)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {(showAllNews ? newsEntries : newsEntries.slice(0, 2)).map((entry) => (
              <div key={entry.id} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-1.6rem',
                  top: '5px',
                  width: '13px',
                  height: '13px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-color)',
                  border: '2px solid #fac863',
                  zIndex: 1
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#fac863', fontWeight: 'bold', flexShrink: 0 }}>
                      {entry.date}
                    </span>
                    <span style={{ fontWeight: 'bold', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                      {entry.title}
                    </span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.55', maxWidth: '600px' }}>
                    <MarkdownInline text={entry.description} />
                    {entry.links?.map((link, i) => (
                      link.url.startsWith('http') ? (
                        <TrackedLink
                          key={i}
                          href={link.url}
                          label={`News: ${entry.id} - ${link.label}`}
                          category="outbound"
                          context="Home News"
                          style={{ marginLeft: '0.5rem', color: '#fac863', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 'bold', whiteSpace: 'nowrap' }}
                        >
                          {link.label} &rarr;
                        </TrackedLink>
                      ) : (
                        <Link
                          key={i}
                          to={link.url}
                          style={{ marginLeft: '0.5rem', color: '#fac863', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 'bold', whiteSpace: 'nowrap' }}
                        >
                          {link.label} &rarr;
                        </Link>
                      )
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {newsEntries.length > 2 && (
          <button
            onClick={() => {
              trackEvent(showAllNews ? 'Collapse: Home News' : 'Expand: Home News');
              setShowAllNews(!showAllNews);
            }}
            style={{
              marginTop: '1.2rem',
              marginLeft: '1.6rem',
              background: 'none',
              border: '1px dashed rgba(255, 255, 255, 0.15)',
              color: 'var(--text-muted)',
              padding: '0.5rem 1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              borderRadius: '6px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            {showAllNews ? '- Show less' : `+ Show ${newsEntries.length - 2} more`}
          </button>
        )}
      </section>

      {/* 2. MAIN PROJECTS (Experience) */}
      <section id="home-projects" className="section" style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#8ab4f8', margin: 0, fontFamily: 'var(--font-mono)' }}>
            MAIN PROJECTS
          </h3>
        </div>

        <div className="worldview-grid-3">
          {projectsData.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(138, 180, 248, 0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}
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

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <div style={{ fontSize: '0.7rem', color: '#8ab4f8', fontFamily: 'var(--font-mono)' }}>[ {project.company.toUpperCase()} ]</div>

                <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.1rem', flex: 1 }}>{project.title}</div>

                {project.hasPublication && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.65rem',
                      color: '#c594c5',
                      backgroundColor: 'rgba(197, 148, 147, 0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(197, 148, 147, 0.2)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 'bold',
                      display: 'inline-block'
                    }}>
                      PUBLICATION
                    </span>
                  </div>
                )}

                <div style={{ fontSize: '0.8rem', color: '#8ab4f8', marginTop: '0.2rem' }}>DETAILS &rarr;</div>
              </div>
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

      {/* PUBLICATIONS */}
      <section id="home-publications" className="section" style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#c594c5', margin: 0, fontFamily: 'var(--font-mono)' }}>
            PUBLICATIONS
          </h3>
        </div>

        <div className="worldview-grid-3">
          {publications.slice(0, 3).map((pub) => (
            <Link
              key={pub.id}
              to="/publications"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(197, 148, 197, 0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '16 / 9',
                background: 'linear-gradient(135deg, rgba(197, 148, 197, 0.14), rgba(197, 148, 197, 0.02))',
                borderBottom: '1px solid rgba(197, 148, 197, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '2.1rem' }}>📄</span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#c594c5', letterSpacing: '0.5px', textAlign: 'center', maxWidth: '85%', lineHeight: '1.4', fontWeight: 'bold' }}>
                  {pub.publisher.toUpperCase()}
                </span>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1rem', lineHeight: '1.4', flex: 1 }}>{pub.title}</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.65rem',
                    color: pub.authors[0] === 'Francesco Dorati' ? '#99c794' : 'var(--text-muted)',
                    backgroundColor: pub.authors[0] === 'Francesco Dorati' ? 'rgba(153, 199, 148, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    border: pub.authors[0] === 'Francesco Dorati' ? '1px solid rgba(153, 199, 148, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>
                    {pub.authors[0] === 'Francesco Dorati' ? 'FIRST AUTHOR' : 'CO-AUTHOR'}
                  </span>
                  <span style={{
                    fontSize: '0.65rem',
                    color: '#c594c5',
                    backgroundColor: 'rgba(197, 148, 197, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(197, 148, 197, 0.25)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>
                    {pub.type}
                  </span>
                  {pub.status === 'UNDER_REVIEW' && (
                    <span style={{
                      fontSize: '0.65rem',
                      color: '#fac863',
                      backgroundColor: 'rgba(250, 200, 99, 0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(250, 200, 99, 0.2)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 'bold',
                      display: 'inline-block'
                    }}>
                      UNDER REVIEW
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '0.8rem', color: '#c594c5', marginTop: '0.2rem' }}>DETAILS &rarr;</div>
              </div>
            </Link>
          ))}

          {/* Full-width "View All" card */}
          <Link to="/publications" className="grid-column-span-3" style={{
            backgroundColor: 'transparent',
            border: '1px dashed rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '1.2rem',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#c594c5',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8rem'
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(197, 148, 197, 0.4)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            VIEW ALL PUBLICATIONS &rarr;
          </Link>
        </div>
      </section>


    </div>
  );
}
