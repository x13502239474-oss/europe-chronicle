/**
 * 冷战时期欧洲（约公元 1950 年）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';
const NATO = '#4a6fa5';
const WARSAW = '#8a4b3a';
const NEUTRAL = '#c9a45c';

export function ColdWarMap() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="冷战时期欧洲">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        冷战时期的欧洲（约公元 1950 年）
      </text>

      {/* 北约（西欧） */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill={NATO} opacity="0.75" stroke={EDGE} />
      <path d="M100 90 L200 70 L220 140 L180 180 L110 170 Z" fill={NATO} opacity="0.75" stroke={EDGE} />
      <path d="M230 90 L280 80 L290 140 L250 170 L230 140 Z" fill={NATO} opacity="0.75" stroke={EDGE} />
      <path d="M100 190 L200 200 L210 270 L150 300 L100 270 Z" fill={NATO} opacity="0.75" stroke={EDGE} />
      <path d="M260 200 L310 210 L320 260 L290 280 L260 260 Z" fill={NATO} opacity="0.75" stroke={EDGE} />

      {/* 华约（东欧） */}
      <path d="M300 80 L430 90 L440 160 L380 190 L300 170 Z" fill={WARSAW} opacity="0.75" stroke={EDGE} />
      <path d="M430 90 L500 100 L510 170 L460 200 L440 160 Z" fill={WARSAW} opacity="0.75" stroke={EDGE} />
      <path d="M500 50 L620 60 L630 150 L570 190 L500 160 Z" fill={WARSAW} opacity="0.75" stroke={EDGE} />
      <path d="M380 200 L470 200 L480 260 L430 280 L380 250 Z" fill={WARSAW} opacity="0.75" stroke={EDGE} />

      {/* 中立国 */}
      <path d="M220 60 L300 55 L300 90 L220 90 Z" fill={NEUTRAL} opacity="0.75" stroke={EDGE} />

      {/* 铁幕线 */}
      <line x1="290" y1="50" x2="290" y2="300" stroke="#3a3329" strokeWidth="3" strokeDasharray="8 5" />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="55" y="120">英国</text>
        <text x="130" y="130">法国</text>
        <text x="250" y="125">西德</text>
        <text x="130" y="260">意大利</text>
        <text x="330" y="140">东德</text>
        <text x="450" y="135">波兰</text>
        <text x="540" y="120">苏联</text>
        <text x="235" y="80">中立国</text>
        <text x="296" y="320" fontSize="12" fontStyle="italic">铁幕</text>
      </g>

      <g fontFamily="sans-serif" fontSize="11" fill={LABEL}>
        <rect x="20" y="400" width="12" height="12" fill={NATO} />
        <text x="36" y="411">北约</text>
        <rect x="80" y="400" width="12" height="12" fill={WARSAW} />
        <text x="96" y="411">华约</text>
        <rect x="145" y="400" width="12" height="12" fill={NEUTRAL} />
        <text x="161" y="411">中立</text>
      </g>
    </svg>
  );
}
