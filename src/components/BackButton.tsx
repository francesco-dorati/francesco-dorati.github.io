import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
  label: string;
}

const SCROLL_THRESHOLD = 150;

const topLinkStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.4rem 0.85rem',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '6px',
  color: 'var(--text-secondary)',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.85rem',
  textDecoration: 'none',
  transition: 'border-color 0.2s, color 0.2s'
};

const bottomLinkStyle: CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.6rem',
  padding: '1rem 1.5rem',
  backgroundColor: 'rgba(18, 18, 18, 0.95)',
  backdropFilter: 'blur(6px)',
  border: '2px solid rgba(255, 255, 255, 0.25)',
  borderRadius: '10px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-mono)',
  fontSize: '1.05rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
  transition: 'border-color 0.2s, background-color 0.2s, transform 0.2s'
};

// Two separate, independent elements:
// - a small outline link that always sits before the page title
// - a bolder fixed bar at the bottom that fades in once the user scrolls past
//   the top one, so there's always a reachable way back without the top
//   button ever disappearing.
export default function BackButton({ to, label }: BackButtonProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTopOver = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    e.currentTarget.style.color = 'var(--text-primary)';
  };
  const handleTopOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
    e.currentTarget.style.color = 'var(--text-secondary)';
  };
  const handleBottomOver = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
    e.currentTarget.style.backgroundColor = 'rgba(30, 30, 30, 1)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const handleBottomOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
    e.currentTarget.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <Link to={to} style={topLinkStyle} onMouseOver={handleTopOver} onMouseOut={handleTopOut}>
          <span>&larr;</span> {label}
        </Link>
      </div>

      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: '1.2rem',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        opacity: scrolled ? 1 : 0,
        transform: scrolled ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: scrolled ? 'auto' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease'
      }}>
        <Link to={to} style={bottomLinkStyle} onMouseOver={handleBottomOver} onMouseOut={handleBottomOut}>
          <span>&larr;</span> {label}
        </Link>
      </div>
    </>
  );
}
