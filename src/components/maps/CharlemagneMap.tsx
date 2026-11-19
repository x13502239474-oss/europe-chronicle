/**
 * 查理曼帝国（约公元 814 年）
 */

const SEA = '#cfe0ea';
const EMPIRE = '#c59a5e';
const EDGE = '#8a6d3d';
const LABEL = '#3a3329';

export function CharlemagneMap() {
  return (
    <svg viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="查理曼帝国疆域图">
      <rect width="680" height="400" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        查理曼帝国（约公元 814 年）
      </text>

      {/* 帝国疆域 */}
      <path
        d="M80 120 L160 70 L260 60 L340 70 L400 100 L420 160 L390 230 L340 270 L280 300 L200 300 L140 270 L90 220 Z"
        fill={EMPIRE} opacity="0.7" stroke={EDGE} strokeWidth="1.5"
      />
      {/* 意大利（帝国一部分） */}
      <path d="M300 300 L340 270 L360 320 L350 370 L310 360 L300 320 Z" fill={EMPIRE} opacity="0.7" stroke={EDGE} strokeWidth="1.5" />

      {/* 标注 */}
      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <circle cx="240" cy="150" r="5" fill="#8a2f3b" />
        <text x="248" y="148">亚琛（宫廷）</text>
        <circle cx="120" cy="260" r="4" fill="#8a2f3b" />
        <text x="100" y="285">罗马</text>
        <text x="200" y="180">查理曼帝国</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="480" y="250">东罗马（拜占庭）</text>
        <text x="450" y="340">地中海</text>
      </g>
    </svg>
  );
}
