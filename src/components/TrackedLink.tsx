import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { trackEvent } from './Analytics';

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
  children, 
  ...props 
}) => {
  const handleClick = () => {
    // Sanitize label for use as an event name (lowercase, replace spaces/special with _)
    const sanitizedLabel = label.toLowerCase().replace(/[^a-z0-9]/g, '_');
    
    // Fire a specific click event for the link
    trackEvent(`click_${sanitizedLabel}`, {
      event_category: category,
      label: label,
      url: href || to,
    });
  };

  if (to) {
    return (
      <Link to={to} {...(props as Omit<LinkProps, 'to'>)} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...props} onClick={handleClick} target={props.target || "_blank"} rel={props.rel || "noopener noreferrer"}>
      {children}
    </a>
  );
};

export default TrackedLink;
