export default function Logo({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#0b0f14" stroke="#1c2430" />
      <path
        d="M42 16H24c-3.3 0-6 2.7-6 6s2.7 6 6 6h10c1.7 0 3 1.3 3 3s-1.3 3-3 3H18"
        stroke="#4de88a"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 48h18c3.3 0 6-2.7 6-6s-2.7-6-6-6H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h16"
        stroke="#22d3ee"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
