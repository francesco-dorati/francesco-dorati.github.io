/**
 * Analytics Configuration
 * Use this file to manage referral labels and other global tracking settings.
 */

export const REFERRAL_MAP: Record<string, string> = {
  'cv': 'CV Access Ref',
  'linkedin': 'LinkedIn Ref',
  'github': 'GitHub Ref',
  'qr': 'QR Code Ref',
  'email': 'Email Signature Ref',
  'dev': 'Developer Testing Ref',
  'test': 'External Testing Ref',
};

/**
 * Maps a ref/utm_source string to a human-readable label.
 * Returns 'Generic Referral' if not found.
 */
export const getReferralLabel = (ref: string | null): string => {
  if (!ref) return 'Generic Referral';
  
  const normalizedRef = ref.toLowerCase().trim();
  return REFERRAL_MAP[normalizedRef] || `Generic Referral (${normalizedRef})`;
};
