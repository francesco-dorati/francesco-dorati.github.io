import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="container">
      <nav style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '1px dashed #6699cc',
        fontFamily: 'var(--font-mono)'
      }}>
        <Link 
          to="/" 
          style={{ 
            color: location.pathname === '/' ? 'var(--color-primary)' : 'var(--color-text)',
            textDecoration: 'none',
            fontWeight: location.pathname === '/' ? 'bold' : 'normal'
          }}
        >
          ~/home
        </Link>
        <Link 
          to="/about" 
          style={{ 
            color: location.pathname === '/about' ? 'var(--color-primary)' : 'var(--color-text)',
            textDecoration: 'none',
            fontWeight: location.pathname === '/about' ? 'bold' : 'normal'
          }}
        >
          ~/about
        </Link>
        <Link 
          to="/projects" 
          style={{ 
            color: location.pathname.startsWith('/projects') ? 'var(--color-primary)' : 'var(--color-text)',
            textDecoration: 'none',
            fontWeight: location.pathname.startsWith('/projects') ? 'bold' : 'normal'
          }}
        >
          ~/projects
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="section" style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.6 }}>
        <p>Built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> and pure CSS.</p>
        <p>© 2026 Francesco Dorati</p>
      </footer>
    </div>
  );
}
