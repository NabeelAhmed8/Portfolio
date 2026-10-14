export default function Logo({ size = 30, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 ${className}`}
      aria-label="N Brutalist Logo"
    >
      {/* Solid raw white block */}
      <rect width="32" height="32" fill="#FFFFFF" />
      {/* Heavy brutalist geometric cutout N */}
      <path
        d="M6 26V6H12L20 20V6H26V26H20L12 12V26H6Z"
        fill="#000000"
      />
    </svg>
  );
}