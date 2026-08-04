import type { CSSProperties, ReactNode } from 'react';

// Renders **bold** spans inside a single line of text.
// Bold gets an explicit color/weight since plain font-weight:bold is barely
// visible against the site's default paragraph gray (var(--text-secondary)).
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

// For single-line text that's already inside its own list item / row (e.g.
// challenges, metrics, publication titles) — bold support only, no block
// splitting or extra wrapper markup.
export function MarkdownInline({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}

interface MarkdownLiteProps {
  text: string;
  style?: CSSProperties;
}

// Minimal markdown: supports **bold** and "- " bullet lists (one block per string).
// Uses plain divs instead of <ul>/<li> — the site's global CSS (index.css) turns
// every <li> into a flex row and removes markers, which breaks generic lists.
export default function MarkdownLite({ text, style }: MarkdownLiteProps) {
  const lines = text.split('\n');
  const blocks: ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      blocks.push(
        <div key={`list-${blocks.length}`} style={{ margin: '0.8rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {listBuffer.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'baseline' }}>
              <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>&gt;</span>
              <span style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{renderInline(item)}</span>
            </div>
          ))}
        </div>
      );
      listBuffer = [];
    }
  };

  lines.forEach((rawLine, i) => {
    const line = rawLine.trim();
    if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2));
    } else {
      flushList();
      if (line.length > 0) {
        blocks.push(
          <p key={`p-${i}`} style={{ marginTop: '1rem', lineHeight: '1.6', ...style }}>
            {renderInline(line)}
          </p>
        );
      }
    }
  });
  flushList();

  return <>{blocks}</>;
}
