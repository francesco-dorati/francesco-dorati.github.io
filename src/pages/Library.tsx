import { books } from '../data/worldview';

export default function Library() {
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
        The Library
        <span className="blinking-cursor" style={{ marginLeft: '0.5rem' }}></span>
      </h1>
      
      <p style={{ marginTop: '1rem', marginBottom: '4rem', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>
        A collection of books that have influenced my thinking on systems, ethics, and human nature.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {books.map(book => (
          <div key={book.id} style={{ 
            padding: '2rem', 
            backgroundColor: 'rgba(255, 255, 255, 0.02)', 
            border: '1px solid rgba(255, 255, 255, 0.05)', 
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(138, 180, 248, 0.3)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}
          >
            <div style={{ 
              fontSize: '0.7rem', 
              color: '#8ab4f8', 
              fontFamily: 'var(--font-mono)',
              letterSpacing: '1px'
            }}>
              [ {book.category.toUpperCase()} ]
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>{book.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>{book.author}</p>
            </div>
            <div style={{ 
              marginTop: '1rem',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              opacity: 0.6
            }}>
              ENTRY_ID: {book.id.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '5rem', 
        padding: '2rem', 
        backgroundColor: 'rgba(255, 255, 255, 0.01)', 
        border: '1px solid rgba(255, 255, 255, 0.03)', 
        borderRadius: '12px',
        fontFamily: 'var(--font-mono)',
        textAlign: 'center'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          "To read is to fly: it is to soar to a point of vantage which gives a view of the whole terrain of history, human nature, and destiny."
        </p>
      </div>
    </div>
  );
}
