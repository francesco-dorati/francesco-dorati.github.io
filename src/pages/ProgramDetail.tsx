import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { programs } from '../data/education';

export default function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);
  const [showAllActivities, setShowAllActivities] = useState(false);

  if (!program) {
    return (
      <div className="section" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>Fellowship record not found.</h2>
        <Link to="/learning" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>$ exit_process</Link>
      </div>
    );
  }

  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in', paddingBottom: '4rem' }}>
      
      {/* Back Button */}
      <Link to="/learning" style={{ 
        display: 'inline-flex', 
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '2.5rem', 
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        transition: 'color 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
      onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
        <span>&larr;</span> cd ../learning
      </Link>

      {/* Header Block */}
      <div style={{ marginBottom: '3.5rem', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
        <h1 style={{ 
          color: 'var(--text-primary)', 
          borderBottom: 'none', 
          fontSize: '2.2rem', 
          margin: '0 0 1rem 0',
          letterSpacing: '-0.5px',
          lineHeight: '1.2'
        }}>
          <span style={{ color: 'var(--terminal-blue)', marginRight: '0.6rem', fontWeight: 'normal' }}>&gt;_</span>
          {program.name}
          <span className="blinking-cursor" style={{ marginLeft: '0.5rem', display: 'inline-block', verticalAlign: 'baseline' }}></span>
        </h1>
        <div style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.95rem', 
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <span>
            <span style={{ color: '#fac863' }}>@ </span> 
            {program.website ? (
              <a 
                href={program.website} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--text-primary)', 
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#fac863';
                  e.currentTarget.style.borderBottom = '1px solid #fac863';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.borderBottom = '1px solid transparent';
                }}
              >
                {program.institution}
              </a>
            ) : (
              <span style={{ color: 'var(--text-primary)' }}>{program.institution}</span>
            )}
          </span>
          <span style={{ opacity: 0.3 }}>|</span> 
          <span>{program.duration}</span>
          <span style={{ opacity: 0.3 }}>|</span> 
          <span>{program.location}</span>
        </div>
      </div>

      {/* Intro Description */}
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: program.image ? '2rem' : '4rem' }}>
        {program.description}
      </p>

      {/* Optional Program Image */}
      {program.image && (
        <div style={{ marginBottom: '4rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <img src={program.image} alt={program.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      )}

      {/* Program Timeline */}
      {program.timeline && program.timeline.length > 0 && (
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#face63', margin: '0 0 2rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>//</span> PROGRAM JOURNEY
          </h2>
          <div style={{ position: 'relative', borderLeft: '1px dashed rgba(255,255,255,0.1)', marginLeft: '0.6rem', paddingLeft: '2.5rem' }}>
            {program.timeline.map((item, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '2.5rem' }}>
                <div style={{ 
                  position: 'absolute', 
                  left: '-2.95rem', 
                  top: '0.35rem',
                  width: '0.8rem', 
                  height: '0.8rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-color)',
                  border: '2px solid #fac863',
                  boxShadow: '0 0 8px rgba(250, 200, 99, 0.2)',
                  zIndex: 2
                }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#fac863', fontSize: '0.9rem', fontWeight: 600 }}>{item.date}</span>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{item.title}</strong>
                    {item.location && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span style={{ opacity: 0.5 }}>@</span> {item.location}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activities Grid */}
      {program.activities && program.activities.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#5fb3b3', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>//</span> KEY ENGAGEMENTS
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {(showAllActivities ? program.activities : program.activities.slice(0, 4)).map((act, i) => (
              <div key={i} style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '1.5rem', 
                borderRadius: '8px' 
              }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{act.name}</strong>
                {act.description && (
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{act.description}</p>
                )}
              </div>
            ))}
          </div>
          
          {program.activities && program.activities.length > 4 && (
            <button 
              onClick={() => setShowAllActivities(!showAllActivities)}
              style={{
                marginTop: '1.5rem',
                background: 'none',
                border: '1px dashed rgba(255,255,255,0.2)',
                color: 'var(--text-muted)',
                padding: '0.8rem 1.2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block',
                width: '100%',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              {showAllActivities ? '- COLLAPSE LIST' : `+ VIEW ALL ENGAGEMENTS (${program.activities?.length || 0})`}
            </button>
          )}
        </div>
      )}

      {/* Projects List */}
      {program.projects && program.projects.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.3rem', color: 'var(--terminal-blue)', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>//</span> RELATED PROJECTS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {program.projects.map((proj, i) => (
               <div key={i} style={{ 
                 border: '1px solid rgba(255, 255, 255, 0.05)', 
                 backgroundColor: 'rgba(138, 180, 248, 0.03)',
                 padding: '1.5rem',
                 borderRadius: '8px'
               }}>
                 <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '1.1rem', marginBottom: proj.subtitle ? '0.2rem' : '0.5rem' }}>{proj.title}</strong>
                 {proj.subtitle && (
                   <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                     {proj.subtitle}
                   </div>
                 )}
                 <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>{proj.description}</p>
               </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
