import { coreIdeas } from '../data/worldview';

export default function Philosophy() {
  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in', paddingBottom: '4rem' }}>
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
        Worldview
        <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
      </h1>
      
      <p style={{ marginTop: '1rem', marginBottom: '4rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        A repository of ideas, ethics, and mental models that define my operating system.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {coreIdeas.map(idea => (
          <div key={idea.id} style={{ 
            borderLeft: '2px solid rgba(153, 199, 148, 0.3)', 
            paddingLeft: '2rem',
            paddingBottom: '1rem' 
          }}>
            <div style={{ 
              color: 'var(--text-primary)', 
              fontSize: '1.3rem', 
              lineHeight: '1.8', 
              whiteSpace: 'pre-wrap',
              marginBottom: '2rem',
              fontFamily: 'var(--font-mono)',
              opacity: 0.9
            }}>
              "{idea.text}"
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}>
              <span style={{ color: '#99c794' }}>[ SOURCE: {idea.source.toUpperCase()} ]</span>
              <span>LOG_ID: {idea.id.toUpperCase()}</span>
            </div>
          </div>
        ))}

        <div style={{ 
          marginTop: '4rem', 
          padding: '2rem', 
          backgroundColor: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          borderRadius: '12px',
          fontFamily: 'var(--font-mono)',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            "Ideas are the foundation of everything we build. This log is continuously evolving."
          </p>
        </div>
      </div>
    </div>
  );
}
