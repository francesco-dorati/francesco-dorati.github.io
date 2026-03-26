import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="container">
      <nav className="top-nav">
        {[
          { path: '/', label: 'home' },
          { path: '/about', label: 'about' },
          { path: '/learning', label: 'learning' },
          { path: '/projects', label: 'projects' }
        ].map(link => {
          const isActive = link.path === '/' 
            ? location.pathname === '/' 
            : location.pathname.startsWith(link.path);
          
          return (
            <Link 
              key={link.path} 
              to={link.path} 
              style={{
                color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.2s, opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
                opacity: isActive ? 1 : 0.7
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = isActive ? 'var(--text-primary)' : 'var(--text-muted)';
                e.currentTarget.style.opacity = isActive ? '1' : '0.7';
              }}
            >
              <span style={{ 
                color: isActive ? 'var(--color-primary)' : 'transparent', 
                marginRight: '0.5rem',
                transition: 'color 0.2s'
              }}>
                &gt;_
              </span>
              {link.label}
            </Link>
          );
        })}
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
