/**
 * 神圣罗马帝国疆域（约公元 1200 年）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';

export function HolyRomanEmpireMap() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="神圣罗马帝国疆域图">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        神圣罗马帝国（约公元 1200 年）
      </text>

      {/* 帝国疆域 */}
      <path d="M230 70 L340 60 L400 100 L420 160 L390 230 L340 270 L280 300 L230 260 L220 160 Z" fill="#b08d57" opacity="0.7" stroke={EDGE} strokeWidth="1.5" />
      {/* 意大利王国（帝国南部） */}
      <path d="M300 300 L340 270 L360 320 L350 370 L310 360 Z" fill="#b08d57" opacity="0.7" stroke={EDGE} strokeWidth="1.5" />
      {/* 波希米亚（帝国东部） */}
      <path d="M400 100 L440 120 L440 180 L400 200 Z" fill="#b08d57" opacity="0.7" stroke={EDGE} strokeWidth="1.5" />

      {/* 内部诸侯国示意（虚线分割） */}
      <line x1="260" y1="100" x2="300" y2="280" stroke="#8a6d3d" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="340" y1="90" x2="360" y2="280" stroke="#8a6d3d" strokeWidth="1" strokeDasharray="4 3" />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="240" y="180">德意志诸邦</text>
        <text x="310" y="330">意大利王国</text>
        <text x="415" y="155">波希米亚</text>
        <text x="150" y="180">法兰西</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
