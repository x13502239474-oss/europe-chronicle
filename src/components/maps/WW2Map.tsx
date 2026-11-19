/**
 * 第二次世界大战欧洲战场（1939—1945 年）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';
const AXIS = '#8a3b4a';
const OCCUPIED = '#c98a6a';

export function WW2Map() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="二战欧洲战场">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        第二次世界大战欧洲战场（1939—1945 年）
      </text>

      {/* 轴心国 */}
      <path d="M240 80 L360 70 L380 150 L340 210 L270 220 L240 140 Z" fill={AXIS} opacity="0.8" stroke={EDGE} strokeWidth="1.5" />
      <path d="M260 220 L310 230 L320 280 L290 300 L260 280 Z" fill={AXIS} opacity="0.8" stroke={EDGE} strokeWidth="1.5" />
      {/* 德占区（最大范围，1941-1942） */}
      <path d="M100 90 L200 70 L240 90 L380 80 L500 90 L520 150 L450 190 L360 210 L300 240 L200 220 L110 170 Z" fill={OCCUPIED} opacity="0.5" stroke={EDGE} strokeDasharray="4 3" />

      {/* 盟国 */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill="#6b8f4a" opacity="0.7" stroke={EDGE} />
      <path d="M520 50 L630 60 L640 150 L570 190 L510 160 Z" fill="#6b8f4a" opacity="0.7" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <circle cx="300" cy="120" r="5" fill="#3a3329" />
        <text x="308" y="118">柏林</text>
        <text x="270" y="160">纳粹德国</text>
        <text x="280" y="250">意大利</text>
        <text x="55" y="120">英国</text>
        <text x="550" y="120">苏联</text>
        <text x="160" y="180">德占区</text>
      </g>

      {/* 战线箭头 */}
      <path d="M540 120 L460 120 L380 120 L300 120" fill="none" stroke="#3a3329" strokeWidth="2" markerEnd="none" strokeDasharray="5 4" />
      <text x="450" y="108" fontFamily="serif" fontSize="11" fill={LABEL}>苏军西进</text>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
