export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logo-bg)" />
      <path
        d="M21.5 10.2a7.5 7.5 0 1 0 0 11.6"
        stroke="#fff"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="20" cy="16" r="1.4" fill="#fff" />
    </svg>
  );
}
