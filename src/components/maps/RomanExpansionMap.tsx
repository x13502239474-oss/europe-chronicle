/**
 * 罗马共和国及帝国扩张图（公元前 500 年 — 公元 117 年）
 * 展示罗马从城邦到地中海帝国的扩张阶段，以及图拉真时期的最大疆域。
 */

const SEA = '#cfe0ea';
const LAND = '#e8e2d2';
const LAND_EDGE = '#b8ad93';
const EARLY = '#b8a06a';   // 前500年（城邦）
const MID = '#c59a5e';     // 前264年（意大利半岛）
const LATE = '#c77f4e';    // 前146年（西地中海）
const MAX = '#a8553a';     // 公元117年（最大疆域）
const LABEL = '#3a3329';

export function RomanExpansionMap() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="罗马共和国及帝国扩张图">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        罗马的扩张（公元前 500 年 — 公元 117 年）
      </text>

      {/* 地中海区域陆地（示意） */}
      {/* 伊比利亚 */}
      <path d="M20 120 L120 90 L140 200 L120 260 L40 250 L20 180 Z" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.2" />
      {/* 高卢 */}
      <path d="M130 70 L240 50 L250 130 L230 190 L150 180 L130 120 Z" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.2" />
      {/* 意大利 */}
      <path d="M280 150 L310 220 L300 270 L270 250 L260 190 Z" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.2" />
      {/* 北非 */}
      <path d="M60 300 L200 330 L360 340 L520 330 L600 310 L580 360 L400 370 L180 360 L60 340 Z" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.2" />
      {/* 希腊与巴尔干 */}
      <path d="M340 160 L420 150 L440 220 L420 280 L360 270 L340 200 Z" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.2" />
      {/* 小亚细亚与近东 */}
      <path d="M470 140 L600 150 L620 230 L580 290 L500 280 L470 200 Z" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.2" />

      {/* 扩张阶段（由小到大叠加） */}
      {/* 公元117年最大疆域 */}
      <path d="M30 140 L130 95 L240 70 L330 140 L430 130 L520 130 L610 150 L620 220 L590 300 L560 330 L360 330 L200 320 L60 300 L30 200 Z"
        fill={MAX} opacity="0.5" stroke="#7a3b25" strokeWidth="1" strokeDasharray="3 3" />
      {/* 前146年西地中海 */}
      <path d="M50 160 L130 120 L220 90 L250 150 L290 200 L300 260 L230 300 L90 300 L50 220 Z"
        fill={LATE} opacity="0.6" stroke="#8a5230" strokeWidth="1" />
      {/* 前264年意大利半岛 */}
      <path d="M270 165 L310 225 L298 265 L262 245 L258 200 Z"
        fill={MID} opacity="0.75" stroke="#8a5a2e" strokeWidth="1" />
      {/* 前500年罗马城邦 */}
      <circle cx="282" cy="215" r="14" fill={EARLY} stroke="#7a5528" strokeWidth="1" />

      {/* 关键地点 */}
      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <circle cx="282" cy="215" r="4" fill="#3a3329" />
        <text x="290" y="212">罗马</text>
        <circle cx="245" cy="250" r="3" fill="#3a3329" />
        <text x="252" y="253">迦太基</text>
        <circle cx="360" cy="200" r="3" fill="#3a3329" />
        <text x="368" y="197">雅典</text>
        <circle cx="560" cy="220" r="3" fill="#3a3329" />
        <text x="566" y="217">安条克</text>
        <circle cx="580" cy="290" r="3" fill="#3a3329" />
        <text x="570" y="310">亚历山大里亚</text>
      </g>

      {/* 海域 */}
      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="350">地中海</text>
        <text x="320" y="105">高卢</text>
        <text x="140" y="340">北非</text>
      </g>

      {/* 图例 */}
      <g fontFamily="sans-serif" fontSize="11" fill={LABEL}>
        <rect x="20" y="400" width="10" height="10" fill={EARLY} stroke="#7a5528" />
        <text x="34" y="410">前500年</text>
        <rect x="95" y="400" width="10" height="10" fill={MID} />
        <text x="109" y="410">前264年</text>
        <rect x="165" y="400" width="10" height="10" fill={LATE} />
        <text x="179" y="410">前146年</text>
        <rect x="235" y="400" width="10" height="10" fill={MAX} opacity="0.6" />
        <text x="249" y="410">117年</text>
      </g>
    </svg>
  );
}
