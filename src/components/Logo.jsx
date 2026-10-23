import nabeelLogo from '../assets/Nabeel Logo.jpg';

export default function Logo({ size = 32, className = "" }) {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative shrink-0 rounded-full overflow-hidden ring-1 ring-white/15 bg-zinc-900 shadow-sm transition-transform duration-200 group-hover:scale-105 ${className}`}
    >
      <img
        src={nabeelLogo}
        alt="Nabeel Logo"
        width={size}
        height={size}
        className="w-full h-full object-cover select-none"
      />
    </div>
  );
}
