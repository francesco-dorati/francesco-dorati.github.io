import { Link, type LinkProps } from 'react-router-dom';

interface TrackedLinkProps extends Partial<Omit<LinkProps, 'to'>> {
  href?: string;
  to?: string;
  label: string;
  category?: 'outbound' | 'internal' | 'navigation';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  context?: string;
}

/**
 * A link component that tracks clicks in Google Analytics.
 * Supports both internal (React Router) and external (<a>) links.
 */
const TrackedLink: React.FC<TrackedLinkProps> = ({ 
  href, 
  to, 
  label, 
  category = 'outbound', 
  context,
  children, 
  ...props 
}) => {
  const umamiProps = {
    'data-umami-event': category === 'outbound' ? 'Outbound Link' : label.slice(0, 50),
    'data-umami-event-label': label,
    'data-umami-event-category': category,
    'data-umami-event-context': context,
    'data-umami-event-url': href || to
  };

  if (to) {
    return (
      <Link to={to} {...(props as Omit<LinkProps, 'to'>)} {...umamiProps}>
        {children}
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      {...props} 
      {...umamiProps} 
      target={props.target || "_blank"} 
      rel={props.rel || "noopener noreferrer"}
    >
      {children}
    </a>
  );
};

export default TrackedLink;
