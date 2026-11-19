/**
 * 十字军东征路线（1096—1291 年）
 */

const SEA = '#cfe0ea';
const LAND = '#e8e2d2';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';
const ROUTE = '#8a2f3b';

export function CrusadesMap() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="十字军东征路线图">
      <rect width="680" height="420" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        十字军东征路线（1096—1291 年）
      </text>

      {/* 欧洲 */}
      <path d="M60 80 L200 60 L280 80 L300 160 L260 240 L180 250 L100 230 L60 150 Z" fill={LAND} stroke={EDGE} />
      {/* 小亚细亚与近东 */}
      <path d="M380 90 L520 110 L540 200 L480 260 L400 250 L380 160 Z" fill={LAND} stroke={EDGE} />
      {/* 北非 */}
      <path d="M200 300 L340 320 L480 310 L460 350 L280 360 L200 340 Z" fill={LAND} stroke={EDGE} />

      {/* 路线（从西欧到君士坦丁堡再到耶路撒冷） */}
      <path d="M120 120 L220 140 L320 160 L400 180 L460 200 L500 240 L480 280" fill="none" stroke={ROUTE} strokeWidth="2.5" strokeDasharray="6 5" />
      <path d="M120 120 L300 220 L360 300 L430 330" fill="none" stroke={ROUTE} strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <circle cx="120" cy="120" r="4" fill={ROUTE} />
        <text x="90" y="110">西欧出发</text>
        <circle cx="400" cy="180" r="4" fill={ROUTE} />
        <text x="408" y="172">君士坦丁堡</text>
        <circle cx="480" cy="280" r="5" fill="#8a2f3b" />
        <text x="488" y="278">耶路撒冷</text>
        <circle cx="300" cy="220" r="4" fill={ROUTE} />
        <text x="308" y="216">威尼斯</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
