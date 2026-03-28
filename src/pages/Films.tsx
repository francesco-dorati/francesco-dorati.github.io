import { Link } from 'react-router-dom';
import { filmsData } from '../data/films';

export default function Films() {
  return (
    <div className="section" style={{ animation: 'fadeIn 0.5s ease-in', paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
         <Link to="/about" className="muted" style={{ textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
           ← cd ../about
         </Link>
      </div>

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
        Cinema
        <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
      </h1>
      
      <p style={{ marginTop: '1rem', marginBottom: '4rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        A curated list of my absolute favorite films. These movies have inspired my thoughts on technology, aesthetics, and philosophy.
        <a href="https://letterboxd.com/francwscodorati/" target="_blank" rel="noopener noreferrer" style={{ 
          display: 'inline-block',
          marginLeft: '0.8rem',
          color: '#fac863', 
          textDecoration: 'none', 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.85rem',
          fontWeight: 'bold'
        }}>
          LETTERBOXD &rarr;
        </a>
      </p>

      <div className="films-grid">
        {filmsData.map((film) => (
          <div key={film.id} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {film.imageUrl ? (
              <div style={{ 
                height: '200px', 
                width: '100%', 
                backgroundImage: `url(${film.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }} />
            ) : (
              <div style={{ 
                height: '200px', 
                width: '100%', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>NO IMAGE</span>
              </div>
            )}
            
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                {film.title}
              </h3>
              
              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.8rem', 
                color: 'var(--text-muted)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {film.director} <span style={{ opacity: 0.3 }}>|</span> {film.year}
              </div>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6', 
                margin: 0,
                fontSize: '0.95rem',
                flex: 1
              }}>
                {film.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
