/**
 * 16 世纪欧洲宗教分布（约公元 1560 年）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';

const CATHOLIC = '#c9a45c';
const LUTHERAN = '#7a9bbf';
const CALVINIST = '#9a7ab0';
const ANGLICAN = '#8fb08a';

export function Religion16cMap() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="16世纪欧洲宗教分布图">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        16 世纪欧洲宗教分布（约公元 1560 年）
      </text>

      {/* 英格兰（国教） */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill={ANGLICAN} opacity="0.8" stroke={EDGE} />
      {/* 法兰西（天主教为主） */}
      <path d="M110 90 L220 70 L230 160 L180 200 L120 190 L110 130 Z" fill={CATHOLIC} opacity="0.8" stroke={EDGE} />
      {/* 德意志北部（路德宗） */}
      <path d="M240 60 L320 55 L330 120 L280 160 L240 140 Z" fill={LUTHERAN} opacity="0.8" stroke={EDGE} />
      {/* 德意志南部/奥地利（天主教） */}
      <path d="M330 55 L410 90 L420 160 L360 200 L320 150 Z" fill={CATHOLIC} opacity="0.8" stroke={EDGE} />
      {/* 瑞士/低地（加尔文宗） */}
      <path d="M180 170 L240 160 L250 200 L210 220 L180 205 Z" fill={CALVINIST} opacity="0.8" stroke={EDGE} />
      {/* 意大利（天主教） */}
      <path d="M260 220 L300 230 L310 280 L290 310 L260 300 L250 260 Z" fill={CATHOLIC} opacity="0.8" stroke={EDGE} />
      {/* 西班牙（天主教） */}
      <path d="M80 200 L200 210 L220 300 L160 340 L100 320 L80 260 Z" fill={CATHOLIC} opacity="0.8" stroke={EDGE} />
      {/* 北欧（路德宗） */}
      <path d="M240 30 L330 25 L350 55 L300 60 L260 55 Z" fill={LUTHERAN} opacity="0.8" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="55" y="120">英格兰（国教）</text>
        <text x="130" y="130">法兰西（天主教）</text>
        <text x="260" y="110">路德宗</text>
        <text x="200" y="200">加尔文宗</text>
        <text x="130" y="260">西班牙（天主教）</text>
        <text x="270" y="270">意大利（天主教）</text>
      </g>

      {/* 图例 */}
      <g fontFamily="sans-serif" fontSize="11" fill={LABEL}>
        <rect x="20" y="400" width="12" height="12" fill={CATHOLIC} />
        <text x="36" y="411">天主教</text>
        <rect x="95" y="400" width="12" height="12" fill={LUTHERAN} />
        <text x="111" y="411">路德宗</text>
        <rect x="165" y="400" width="12" height="12" fill={CALVINIST} />
        <text x="181" y="411">加尔文宗</text>
        <rect x="245" y="400" width="12" height="12" fill={ANGLICAN} />
        <text x="261" y="411">英国国教</text>
      </g>
    </svg>
  );
}
