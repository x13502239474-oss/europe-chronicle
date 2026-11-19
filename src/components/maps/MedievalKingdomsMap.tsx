/**
 * 中世纪欧洲主要王国（约公元 1000 年）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';

export function MedievalKingdomsMap() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="中世纪欧洲主要王国">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        中世纪欧洲主要王国（约公元 1000 年）
      </text>

      {/* 英格兰 */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill="#4a6fa5" opacity="0.7" stroke={EDGE} />
      {/* 法兰西 */}
      <path d="M110 90 L220 70 L230 160 L180 200 L120 190 L110 130 Z" fill="#6b8f4a" opacity="0.7" stroke={EDGE} />
      {/* 神圣罗马帝国 */}
      <path d="M230 70 L340 60 L400 100 L420 160 L390 230 L340 270 L280 300 L230 260 L220 160 Z" fill="#b08d57" opacity="0.7" stroke={EDGE} />
      {/* 意大利（帝国南翼） */}
      <path d="M300 300 L340 270 L360 320 L350 370 L310 360 Z" fill="#b08d57" opacity="0.7" stroke={EDGE} />
      {/* 西班牙（穆斯林与基督教王国） */}
      <path d="M80 200 L200 210 L220 300 L160 340 L100 320 L80 260 Z" fill="#7a5a8a" opacity="0.7" stroke={EDGE} />
      {/* 拜占庭 */}
      <path d="M430 120 L560 130 L570 240 L520 280 L430 270 L420 180 Z" fill="#8a4b3a" opacity="0.7" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="60" y="125">英格兰</text>
        <text x="140" y="130">法兰西王国</text>
        <text x="270" y="180">神圣罗马帝国</text>
        <text x="130" y="260">西班牙诸王国</text>
        <text x="455" y="200">拜占庭帝国</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
