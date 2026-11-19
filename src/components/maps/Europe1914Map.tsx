/**
 * 1914 年欧洲政治地图
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';

const TRIPLE_ENTENTE = '#6b8f4a';   // 协约国
const TRIPLE_ALLIANCE = '#8a4b3a';  // 同盟国

export function Europe1914Map() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1914年欧洲政治地图">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        1914 年欧洲政治地图（一战前夕）
      </text>

      {/* 协约国 */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill={TRIPLE_ENTENTE} opacity="0.75" stroke={EDGE} />
      <path d="M100 90 L200 70 L220 140 L180 180 L110 170 Z" fill={TRIPLE_ENTENTE} opacity="0.75" stroke={EDGE} />
      <path d="M500 50 L620 60 L630 150 L570 190 L500 160 Z" fill={TRIPLE_ENTENTE} opacity="0.75" stroke={EDGE} />

      {/* 同盟国 */}
      <path d="M240 80 L380 70 L400 150 L360 210 L280 220 L240 150 Z" fill={TRIPLE_ALLIANCE} opacity="0.75" stroke={EDGE} />
      <path d="M400 90 L500 100 L510 180 L460 230 L410 210 Z" fill={TRIPLE_ALLIANCE} opacity="0.75" stroke={EDGE} />
      <path d="M260 220 L310 230 L320 280 L290 300 L260 280 Z" fill={TRIPLE_ALLIANCE} opacity="0.75" stroke={EDGE} />

      {/* 巴尔干（导火索） */}
      <path d="M460 230 L520 240 L530 300 L480 320 L450 290 Z" fill="#c59a5e" opacity="0.75" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="55" y="120">英国</text>
        <text x="130" y="130">法国</text>
        <text x="540" y="120">俄国</text>
        <text x="270" y="150">德意志帝国</text>
        <text x="430" y="150">奥匈帝国</text>
        <text x="275" y="260">意大利</text>
        <text x="475" y="270">巴尔干</text>
      </g>

      <g fontFamily="sans-serif" fontSize="11" fill={LABEL}>
        <rect x="20" y="400" width="12" height="12" fill={TRIPLE_ENTENTE} />
        <text x="36" y="411">协约国</text>
        <rect x="95" y="400" width="12" height="12" fill={TRIPLE_ALLIANCE} />
        <text x="111" y="411">同盟国</text>
      </g>
    </svg>
  );
}
