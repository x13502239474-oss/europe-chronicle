/**
 * 1815 年维也纳体系
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';

export function Vienna1815Map() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1815年维也纳体系">
      <rect width="680" height="420" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        维也纳体系下的欧洲（公元 1815 年）
      </text>

      {/* 主要国家 */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill="#4a6fa5" opacity="0.7" stroke={EDGE} />
      <path d="M100 90 L200 70 L220 140 L180 180 L110 170 Z" fill="#6b8f4a" opacity="0.7" stroke={EDGE} />
      <path d="M230 80 L360 70 L380 150 L340 210 L270 220 L240 150 Z" fill="#b08d57" opacity="0.7" stroke={EDGE} />
      <path d="M370 90 L470 100 L480 180 L430 230 L380 210 L370 150 Z" fill="#8a4b3a" opacity="0.7" stroke={EDGE} />
      <path d="M480 60 L580 70 L590 150 L540 190 L480 170 Z" fill="#5a7a8a" opacity="0.7" stroke={EDGE} />
      <path d="M60 200 L150 210 L170 290 L110 320 L60 270 Z" fill="#7a5a8a" opacity="0.7" stroke={EDGE} />
      <path d="M250 220 L300 230 L310 280 L280 300 L250 280 Z" fill="#8a6d3d" opacity="0.7" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="55" y="120">英国</text>
        <text x="130" y="130">法国</text>
        <text x="270" y="150">普鲁士</text>
        <text x="400" y="150">奥地利帝国</text>
        <text x="500" y="130">俄罗斯帝国</text>
        <text x="100" y="260">西班牙</text>
        <text x="265" y="260">意大利诸邦</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
