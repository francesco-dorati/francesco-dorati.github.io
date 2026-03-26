import { Link } from 'react-router-dom';
import { educationData, programs } from '../data/education';
import { currentFocus, learnedDomains, exploring, timeline } from '../data/learning';

export default function Learning() {
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
      
      <p style={{ marginTop: '0', marginBottom: '4rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
        Building robots requires a constant state of evolution. I believe in an engineering mindset driven by deep curiosity, relentless self-teaching, and proving knowledge by building real, physical systems.
      </p>

      {/* 2. Formal Education Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#ec5f67', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          {/* <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span> */}
          FORMAL EDUCATION
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {educationData.map(degree => (
            <Link key={degree.id} to={`/education/${degree.id}`} style={{ 
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
              e.currentTarget.style.borderColor = 'rgba(236, 95, 103, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>{degree.degree}</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{degree.duration}</span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <span style={{ color: '#fac863' }}>@</span> {degree.university}
              </p>
              <div style={{ color: '#ec5f67', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                VIEW COURSEWORK & PROJECTS <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2.5 Programs & Fellowships Section */}
      <div style={{ marginBottom: '4rem' }}>
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
                <span style={{ color: '#fac863' }}>@</span> {prog.role} <span style={{ opacity: 0.5, margin: '0 0.5rem' }}>|</span> {prog.location}
              </p>
              <div style={{ color: '#fac863', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                VIEW DETAILS & CONTRIBUTIONS <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Currently Focused On */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#5fb3b3', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span>
          CURRENTLY FOCUSED ON
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
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
              e.currentTarget.style.borderColor = 'rgba(95, 179, 179, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}>
              <div style={{ fontSize: '2rem' }}>{focus.icon}</div>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{focus.title}</strong>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                {focus.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Learning Philosophy */}
      <div style={{ 
        marginBottom: '4rem',
        backgroundColor: 'rgba(250, 200, 99, 0.05)',
        borderLeft: '4px solid #fac863',
        padding: '2rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <h3 style={{ fontSize: '1.2rem', color: '#fac863', margin: '0 0 1rem 0', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem', opacity: 0.5 }}>//</span>
          LEARNING PHILOSOPHY
        </h3>
        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Hardware is unforgiving. I don't believe you truly understand an algorithm or a control theory until you have watched it fail aggressively on a physical system. My learning is driven entirely by <strong>trial, error, and debugging reality</strong>. I build in order to learn, rather than learning in order to build.
        </p>
      </div>

      {/* 3. What I've Learned (Domains) */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#c594c5', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span>
          DOMAIN KNOWLEDGE
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {learnedDomains.map((domain, i) => (
            <div key={i}>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                {domain.category}
              </strong>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {domain.skills.map((skill, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem', alignItems: 'center' }}>
                    <span style={{ color: '#c594c5', fontSize: '0.8rem' }}>&gt;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Currently Exploring & 6. Future Direction */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        
        {/* Exploring */}
        <div>
          <h3 style={{ fontSize: '1.2rem', color: '#ec5f67', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span>
            CURRENTLY EXPLORING
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {exploring.map((topic, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: '#ec5f67', fontFamily: 'var(--font-mono)' }}>?</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Future Direction */}
        <div>
          <h3 style={{ fontSize: '1.2rem', color: '#99c794', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span>
            PROJECTED TRAJECTORY
          </h3>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            My ultimate goal is to bridge the gap between high-level AI algorithms and low-level reliable hardware execution. I want to build robust autonomy systems that operate not just in simulation, but in the chaotic, unstructured real world.
          </p>
        </div>

      </div>

      {/* 7. Mini Timeline */}
      <div>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', margin: '0 0 2rem 0', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>//</span>
          RUNTIME HISTORY
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
          {timeline.map((point, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Timeline marker */}
              <div style={{ 
                position: 'absolute', 
                left: '-1.85rem', 
                top: '0.3rem', 
                width: '10px', 
                height: '10px', 
                backgroundColor: 'var(--color-background)', 
                border: '2px solid var(--color-primary)', 
                borderRadius: '50%' 
              }} />
              
              <strong style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.3rem' }}>
                {point.year}
              </strong>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
