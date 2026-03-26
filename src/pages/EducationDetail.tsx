import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { educationData } from '../data/education';

export default function EducationDetail() {
  const { id } = useParams();
  const degree = educationData.find(d => d.id === id);
  const [showAllCourses, setShowAllCourses] = useState(false);

  if (!degree) {
    return (
      <div className="section" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>Degree record not found.</h2>
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
          {degree.degree}
          <span className="blinking-cursor" style={{ marginLeft: '0.5rem', display: 'inline-block', verticalAlign: 'baseline' }}></span>
        </h1>
        {degree.subtitle && (
          <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '1.05rem', marginBottom: '1.5rem', marginTop: '-0.5rem', opacity: 0.8 }}>
            {degree.subtitle}
          </div>
        )}
        <div style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.95rem', 
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <span><span style={{ color: '#fac863' }}>@</span> {degree.university}</span>
          <span style={{ opacity: 0.3 }}>|</span> 
          <span>{degree.duration}</span>
          <span style={{ opacity: 0.3 }}>|</span> 
          <span>{degree.location}</span>
        </div>
      </div>

      {/* Intro Description */}
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
        {degree.description}
      </p>

      {/* Coursework Grid */}
      {degree.courses.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.3rem', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>//</span> 
            KEY COURSEWORK
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {(showAllCourses ? degree.courses : degree.courses.slice(0, 4)).map((course, i) => (
              <div key={i} style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '1.5rem', 
                borderRadius: '8px' 
              }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{course.name}</strong>
                {course.description && (
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{course.description}</p>
                )}
              </div>
            ))}
          </div>
          
          {degree.courses.length > 4 && (
            <button 
              onClick={() => setShowAllCourses(!showAllCourses)}
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
              {showAllCourses ? '- COLLAPSE LIST' : `+ VIEW ALL COURSEWORK (${degree.courses.length})`}
            </button>
          )}
        </div>
      )}

      {/* Projects List */}
      {degree.projects.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.3rem', color: 'var(--terminal-red)', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>//</span> ACADEMIC PROJECTS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {degree.projects.map((proj, i) => (
               <div key={i} style={{ 
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: 'rgba(236, 95, 103, 0.03)',
                  padding: '1.5rem',
                  borderRadius: '8px'
               }}>
                 <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{proj.title}</strong>
                 <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                   <span style={{ color: 'var(--text-muted)' }}>{proj.type}</span>
                   <span style={{ opacity: 0.5 }}>|</span>
                   <span>{proj.year}</span>
                   {proj.grade && (
                     <>
                       <span style={{ opacity: 0.5 }}>|</span>
                       <span>Grade: {proj.grade}</span>
                     </>
                   )}
                 </div>
                 <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: proj.technologies ? '1.2rem' : '0' }}>{proj.description}</p>
                 {proj.technologies && (
                   <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                     {proj.technologies.map((tech, j) => (
                       <span key={j} style={{
                         backgroundColor: 'rgba(255, 255, 255, 0.05)',
                         color: 'var(--text-primary)',
                         padding: '0.2rem 0.6rem',
                         borderRadius: '4px',
                         fontSize: '0.75rem',
                         fontFamily: 'var(--font-mono)'
                       }}>
                         {tech}
                       </span>
                     ))}
                   </div>
                 )}
               </div>
            ))}
          </div>
        </div>
      )}

      {/* Extracurricular Activities */}
      {degree.activities && degree.activities.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.3rem', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>//</span> OTHER ACTIVITIES
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {degree.activities.map((act, i) => {
              const accentColor = act.color 
                ? (['yellow', 'magenta', 'blue', 'cyan', 'red', 'green'].includes(act.color) 
                    ? `var(--terminal-${act.color})` 
                    : act.color)
                : 'var(--terminal-magenta)';
                
              return (
                <div key={i} style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  position: 'relative',
                  transition: 'transform 0.2s, backgroundColor 0.2s',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                }}>
                  {act.subtitle && (
                    <div style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.75rem', 
                      color: accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      opacity: 0.9
                    }}>
                      <span style={{ opacity: 0.5 }}>[</span>
                      <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>{act.subtitle}</span>
                      <span style={{ opacity: 0.5 }}>]</span>
                    </div>
                  )}
                  
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.4' }}>{act.name}</strong>
                  
                  {act.description && (
                    <p style={{ 
                      margin: 0, 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.9rem', 
                      lineHeight: '1.6',
                      opacity: 0.9
                    }}>
                      {act.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
