import { Link } from 'react-router-dom';
import { educationData, programs } from '../data/education';
import { currentFocus, exploring, onlineCourses, techStack, languages, publications } from '../data/learning';
import { useSectionTracking } from '../components/Analytics';
import TrackedLink from '../components/TrackedLink';

export default function Learning() {
  useSectionTracking({
    'learn-education': 'Degrees', 
    'learn-publications': 'Publications', 
    'learn-programs': 'Programs', 
    'learn-courses': 'Courses', 
    'learn-tech': 'Stack'
  }, 'Learning');

  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in', paddingBottom: '4rem' }}>
      
      {/* 1. Hero / Intro Section */}
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
        Learning
        <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
      </h1>
      
      <div style={{ marginBottom: '4rem', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* <div>
          <p style={{ margin: '0', opacity: 0.9, lineHeight: '1.6', fontSize: '1.15rem', color: 'var(--text-primary)', fontStyle: 'italic', fontFamily: 'var(--font-mono)' }}>
            "As long as I’m learning something, I figure I’m doing OK — it’s a decent day."
          </p>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.6, fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            — Hunter S. Thompson
          </p>
        </div> */}
        <div>
          <p style={{ margin: '0', opacity: 0.9, lineHeight: '1.6', fontSize: '1.15rem', color: 'var(--text-primary)', fontStyle: 'italic', fontFamily: 'var(--font-mono)' }}>
            "You keep on learning and learning, and pretty soon you learn something no one has learned before."
          </p>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.6, fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            — Richard Feynman
          </p>
        </div>
      </div>

      {/* 2. Expertise & Research Interests */}
      <div id="learn-interests" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#6699cc', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          RESEARCH INTERESTS
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {currentFocus.map(focus => (
            <div key={focus.id} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '1.5rem',
              transition: 'transform 0.2s, borderColor 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(102, 153, 204, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{focus.icon}</span>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{focus.title}</strong>
              </div>
              <ul style={{ 
                margin: 0, 
                padding: 0, 
                listStyle: 'none', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.4rem' 
              }}>
                {focus.bullets.map((bullet, i) => (
                  <li key={i} style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.85rem', 
                    lineHeight: '1.4',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.6rem'
                  }}>
                    <span style={{ color: '#6699cc', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>&gt;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      

      {/* 3. Formal Education Section */}
      <div id="learn-education" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#ec5f67', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          FORMAL EDUCATION
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {educationData.map(degree => (
            <Link key={degree.id} to={`/education/${degree.id}`} style={{ 
              backgroundColor: degree.isExchange ? 'rgba(255, 255, 255, 0.01)' : 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: degree.isExchange ? '1rem 1.5rem' : '1.5rem',
              marginLeft: degree.isExchange ? '2.5rem' : '0',
              marginTop: degree.isExchange ? '-0.8rem' : '0',
              textDecoration: 'none',
              transition: 'transform 0.2s, borderColor 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#ec5f67';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}>
              {degree.isExchange && (
                <div style={{ 
                  position: 'absolute', 
                  left: '-1.5rem', 
                  top: '50%', 
                  width: '1rem', 
                  height: '1px', 
                  backgroundColor: 'rgba(236, 95, 103, 0.3)',
                  display: 'none' 
                }} />
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {degree.isExchange && <span style={{ color: '#ec5f67', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>↳</span>}
                  <strong style={{ color: 'var(--text-primary)', fontSize: degree.isExchange ? '1.05rem' : '1.15rem' }}>{degree.degree}</strong>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{degree.duration}</span>
              </div>
              {degree.subtitle && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '-0.2rem', marginLeft: degree.isExchange ? '1.2rem' : '0' }}>
                  {degree.subtitle}
                </div>
              )}
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: degree.isExchange ? '0.9rem' : '0.95rem', marginLeft: degree.isExchange ? '1.2rem' : '0' }}>
                <span style={{ color: '#fac863' }}>@</span> {degree.university}
              </p>
              <div style={{ color: '#ec5f67', fontFamily: 'var(--font-mono)', fontSize: degree.isExchange ? '0.8rem' : '0.9rem', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: degree.isExchange ? '1.2rem' : '0' }}>
                {degree.isExchange ? 'VIEW EXCHANGE DETAILS' : 'VIEW COURSEWORK & PROJECTS'} <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2.6 Research & Publications */}
      <div id="learn-publications" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#6699cc', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          RESEARCH & PUBLICATIONS
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {publications.map((pub, i) => (
            <TrackedLink 
              key={i} 
              href={pub.link || '#'}
              label={`Publication: ${pub.title}`}
              category="outbound"
              context="Learning Publications"
              className="publication-card"
              style={{ 
                padding: '1.2rem',
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(102, 153, 204, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(102, 153, 204, 0.03)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <div className="publication-info">
                <span style={{ 
                  fontSize: '0.65rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(102, 153, 204, 0.1)',
                  color: '#6699cc',
                  border: '1px solid rgba(102, 153, 204, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                  minWidth: '70px',
                  textAlign: 'center',
                  marginTop: '0.2rem'
                }}>
                  {pub.type}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', lineHeight: '1.4' }}>{pub.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{pub.publisher}</div>
                </div>
              </div>
              <div 
                className="publication-year"
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--text-muted)', 
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  marginTop: '0.2rem'
                }}
              >
                [{pub.year}]
              </div>
            </TrackedLink>
          ))}
        </div>
      </div>

      {/* 2.5 Programs & Fellowships Section */}
      <div id="learn-programs" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#fac863', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          PROGRAMS & FELLOWSHIPS
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {programs.map(prog => (
            <Link key={prog.id} to={`/programs/${prog.id}`} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '1.5rem',
              textDecoration: 'none',
              transition: 'transform 0.2s, borderColor 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(250, 200, 99, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>{prog.name}</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{prog.duration}</span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <span style={{ color: '#fac863' }}>@</span> {prog.institution} <span style={{ opacity: 0.5, margin: '0 0.5rem' }}>|</span> {prog.location}
              </p>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', opacity: 0.85 }}>
                {prog.shortDescription}
              </p>
              <div style={{ color: '#fac863', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                VIEW DETAILS <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
        
      {/* 5. Exploration & Future Log */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#99c794', margin: '0 0 2rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          CURRENTLY LEARNING
        </h3>
        
        <div style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.9rem', 
          backgroundColor: 'rgba(0,0,0,0.1)', 
          padding: '2rem', 
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {exploring.map((item) => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ 
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: item.status === 'LEARNING' ? 'rgba(250, 200, 99, 0.1)' : 'rgba(255,255,255,0.05)',
                    color: item.status === 'LEARNING' ? '#fac863' : 'var(--text-muted)',
                    border: `1px solid ${item.status === 'LEARNING' ? 'rgba(250, 200, 99, 0.2)' : 'rgba(255,255,255,0.1)'}`
                  }}>
                    {item.status}
                  </span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{item.title}</span>
                  {item.source && (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', opacity: 0.8, fontFamily: 'var(--font-mono)' }}>
                      // {item.source}
                    </span>
                  )}
                </div>
                {item.status === 'LEARNING' && (
                  <span style={{ color: '#99c794', fontWeight: 'bold' }}>{item.progress}%</span>
                )}
              </div>
              
              {item.status === 'LEARNING' && (
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', opacity: 0.9 }}>
                  <span style={{ color: 'var(--text-muted)' }}>[</span>
                  <div style={{ flex: 1, height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden', display: 'flex' }}>
                    <div style={{ 
                      width: `${item.progress}%`, 
                      height: '100%', 
                      backgroundColor: '#99c794',
                      boxShadow: '0 0 10px rgba(153, 199, 148, 0.3)'
                    }} />
                  </div>
                  <span style={{ color: 'var(--text-muted)' }}>]</span>
                </div>
              )}
              
              {item.status !== 'LEARNING' && (
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', marginLeft: '0.5rem' }}>
                  {'>>'} STATUS_QUEUED: Awaiting resource allocation...
                </div>
              )}
            </div>
          ))}
          

        </div>
      </div>
      



      {/* 2.6 Online Courses & Certifications Section */}
      <div id="learn-courses" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#c594c5', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          ONLINE COURSES & CERTIFICATIONS
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '1rem' 
        }}>
          {onlineCourses.map(course => (
            <TrackedLink 
              key={course.id} 
              href={course.url} 
              label={`Course: ${course.title}`}
              category="outbound"
              context="Learning Courses"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid rgba(255, 255, 255, 0.05)', 
                borderRadius: '8px',
                padding: '1.2rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(197, 148, 197, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(197, 148, 197, 0.03)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.8rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.4' }}>{course.title}</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{course.date}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#c594c5', opacity: 0.8 }}>@</span> {course.platform}
              </div>
            </TrackedLink>
          ))}
        </div>
      </div>





      {/* 5. Tech Stack Section */}
      <div id="learn-tech" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#6699cc', margin: '0 0 2rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          TECHNICAL STACK
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {techStack.map((cat, i) => (
            <div key={i}>
              <h4 style={{ 
                color: 'var(--text-primary)', 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)',
                opacity: 0.9,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#6699cc' }}>[</span> {cat.name} <span style={{ color: '#6699cc' }}>]</span>
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {cat.skills.map((skill, j) => (
                  <span key={j} style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-secondary)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* 6. Human Languages Section */}
      <div style={{ paddingBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#99c794', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          HUMAN LANGUAGES
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
          gap: '1rem' 
        }}>
          {languages.map((lang, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.2rem', 
              fontFamily: 'var(--font-mono)',
              padding: '1rem',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '8px'
            }}>
              <span style={{ 
                fontSize: '0.6rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                backgroundColor: lang.status === 'NATIVE' ? 'rgba(102, 153, 204, 0.1)' : 
                               lang.status === 'PLANNED' ? 'rgba(255,255,255,0.02)' : 
                               'rgba(153, 199, 148, 0.1)',
                color: lang.status === 'NATIVE' ? '#6699cc' : 
                       lang.status === 'PLANNED' ? 'var(--text-muted)' : 
                       '#99c794',
                border: `1px solid ${lang.status === 'NATIVE' ? 'rgba(102, 153, 204, 0.2)' : 
                                    lang.status === 'PLANNED' ? 'rgba(255,255,255,0.1)' : 
                                    'rgba(153, 199, 148, 0.2)'}`,
                minWidth: '75px',
                textAlign: 'center',
                letterSpacing: '0.05em'
              }}>
                {lang.status}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1rem' }}>{lang.name}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{lang.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
