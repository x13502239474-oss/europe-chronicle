/**
 * 当代欧洲政治地图（21 世纪）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';
const EU = '#4a6fa5';

export function EuropeTodayMap() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="当代欧洲政治地图">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        当代欧洲政治地图（21 世纪）
      </text>

      {/* 欧盟范围（示意） */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill={EU} opacity="0.6" stroke={EDGE} />
      <path d="M100 90 L200 70 L220 140 L180 180 L110 170 Z" fill={EU} opacity="0.6" stroke={EDGE} />
      <path d="M230 80 L340 75 L350 150 L300 190 L240 170 Z" fill={EU} opacity="0.6" stroke={EDGE} />
      <path d="M340 80 L430 90 L440 160 L380 190 L350 150 Z" fill={EU} opacity="0.6" stroke={EDGE} />
      <path d="M100 190 L200 200 L210 270 L150 300 L100 270 Z" fill={EU} opacity="0.6" stroke={EDGE} />
      <path d="M260 200 L310 210 L320 260 L290 280 L260 260 Z" fill={EU} opacity="0.6" stroke={EDGE} />

      {/* 非欧盟欧洲国家 */}
      <path d="M430 90 L500 100 L510 170 L460 200 L440 160 Z" fill="#c9a45c" opacity="0.6" stroke={EDGE} />
      <path d="M500 50 L620 60 L630 150 L570 190 L500 160 Z" fill="#8a4b3a" opacity="0.6" stroke={EDGE} />
      <path d="M380 200 L470 200 L480 260 L430 280 L380 250 Z" fill="#c9a45c" opacity="0.6" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="55" y="120">英国（已脱欧）</text>
        <text x="130" y="130">法国</text>
        <text x="270" y="125">德国</text>
        <text x="370" y="135">波兰</text>
        <text x="130" y="260">西班牙/意大利</text>
        <text x="540" y="120">俄罗斯</text>
        <text x="420" y="240">巴尔干</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
