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
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ color: '#fac863', marginRight: '0.6rem', fontWeight: 'normal' }}>&gt;_</span>
          {program.name}
          <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
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
          <span><span style={{ color: '#fac863' }}>@</span> <span style={{ color: 'var(--text-primary)' }}>{program.role}</span></span>
          <span style={{ opacity: 0.3 }}>|</span> 
          <span>{program.duration}</span>
          <span style={{ opacity: 0.3 }}>|</span> 
          <span>{program.location}</span>
        </div>
      </div>

      {/* Intro Description */}
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
        {program.description}
      </p>

      {/* Activities Grid */}
      {program.activities.length > 0 && (
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
          
          {program.activities.length > 4 && (
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
              {showAllActivities ? '- COLLAPSE LIST' : `+ VIEW ALL ENGAGEMENTS (${program.activities.length})`}
            </button>
          )}
        </div>
      )}

      {/* Projects List */}
      {program.projects.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#fac863', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>//</span> CONTRIBUTIONS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {program.projects.map((proj, i) => (
               <div key={i} style={{ 
                 borderLeft: '4px solid #fac863', 
                 paddingLeft: '1.5rem',
                 backgroundColor: 'rgba(250, 200, 99, 0.05)',
                 padding: '1.5rem',
                 borderRadius: '0 8px 8px 0'
               }}>
                 <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{proj.title}</strong>
                 <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>{proj.description}</p>
               </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
