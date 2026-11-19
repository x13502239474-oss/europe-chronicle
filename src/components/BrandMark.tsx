/** 站标：古典立柱 + 桂冠意象的简约图形 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 底座 */}
      <rect x="5" y="25" width="22" height="3" rx="1" fill="#b08d57" />
      <rect x="8" y="22" width="16" height="2" rx="1" fill="#c7a86b" />
      {/* 柱身 */}
      <rect x="11" y="8" width="10" height="14" rx="1.5" fill="#c7a86b" />
      <line x1="13" y1="8" x2="13" y2="22" stroke="#8a6d3d" strokeWidth="0.8" />
      <line x1="17" y1="8" x2="17" y2="22" stroke="#8a6d3d" strokeWidth="0.8" />
      {/* 柱头 */}
      <rect x="8" y="5" width="16" height="3" rx="1" fill="#b08d57" />
      {/* 三角楣 */}
      <path d="M5 5 L16 1 L27 5 Z" fill="#c7a86b" />
      <circle cx="16" cy="3.6" r="1" fill="#8a2f3b" />
    </svg>
  )
}
