/**
 * 拿破仑战争时期欧洲（约公元 1812 年）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';
const FRANCE = '#8a3b4a';
const ALLY = '#c59a5e';

export function NapoleonMap() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="拿破仑战争时期欧洲">
      <rect width="680" height="420" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        拿破仑帝国（约公元 1812 年）
      </text>

      {/* 法兰西帝国 */}
      <path d="M100 100 L200 80 L240 150 L200 220 L130 210 L100 150 Z" fill={FRANCE} opacity="0.8" stroke={EDGE} strokeWidth="1.5" />
      {/* 附庸国/盟国（莱茵邦联、意大利等） */}
      <path d="M240 90 L330 80 L340 160 L280 200 L240 160 Z" fill={ALLY} opacity="0.7" stroke={EDGE} />
      <path d="M260 210 L300 220 L310 270 L280 290 L260 260 Z" fill={ALLY} opacity="0.7" stroke={EDGE} />
      {/* 西班牙（法占） */}
      <path d="M60 200 L150 210 L170 290 L110 320 L60 270 Z" fill={ALLY} opacity="0.7" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <circle cx="160" cy="150" r="5" fill="#3a3329" />
        <text x="168" y="148">巴黎</text>
        <text x="120" y="185">法兰西帝国</text>
        <text x="270" y="140">莱茵邦联</text>
        <text x="285" y="250">意大利</text>
        <text x="400" y="180">奥地利帝国</text>
        <text x="500" y="130">俄罗斯帝国</text>
        <text x="100" y="300">西班牙</text>
      </g>

      {/* 征俄路线 */}
      <path d="M160 130 L280 120 L420 120 L540 110" fill="none" stroke="#3a3329" strokeWidth="2" strokeDasharray="6 5" />

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
