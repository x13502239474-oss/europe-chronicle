/**
 * 1871 年德意志统一
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';
const PRUSSIA = '#8a3b4a';

export function GermanUnificationMap() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1871年德意志统一">
      <rect width="680" height="420" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        德意志帝国的建立（公元 1871 年）
      </text>

      {/* 普鲁士（核心） */}
      <path d="M320 60 L460 70 L470 150 L400 180 L320 160 Z" fill={PRUSSIA} opacity="0.8" stroke={EDGE} strokeWidth="1.5" />
      {/* 统一后的德意志帝国疆域 */}
      <path d="M220 90 L320 60 L470 70 L500 140 L470 200 L400 230 L300 240 L240 200 L220 140 Z" fill="none" stroke="#8a3b4a" strokeWidth="2.5" strokeDasharray="6 4" />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <circle cx="360" cy="120" r="5" fill="#3a3329" />
        <text x="368" y="118">柏林</text>
        <text x="280" y="180">德意志帝国</text>
        <text x="390" y="210">南德意志诸邦</text>
        <text x="130" y="150">法兰西</text>
        <text x="520" y="250">奥匈帝国</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
