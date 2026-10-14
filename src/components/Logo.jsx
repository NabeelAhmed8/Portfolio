import nabeelLogo from '../assets/Nabeel Logo.jpg';

export default function Logo({ size = 30, className = "" }) {
  return (
    <img
      src={nabeelLogo}
      alt="Nabeel Logo"
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`select-none shrink-0 object-contain border border-white bg-white ${className}`}
    />
  );
}