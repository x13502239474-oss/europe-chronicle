/**
 * 西罗马帝国灭亡后的欧洲（约公元 500 年）
 * 展示蛮族诸王国在罗马废墟上的分布。
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';

// 各王国配色
const COLORS: Record<string, string> = {
  东罗马: '#8a4b3a',
  法兰克: '#4a6fa5',
  西哥特: '#6b8f4a',
  东哥特: '#b08d57',
  汪达尔: '#7a5a8a',
  勃艮第: '#a56b3a',
  撒克逊: '#5a7a8a',
};

export function AfterRomeMap() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="西罗马帝国灭亡后的欧洲">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        西罗马帝国灭亡后的欧洲（约公元 500 年）
      </text>

      {/* 不列颠（盎格鲁-撒克逊） */}
      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill={COLORS.撒克逊} opacity="0.7" stroke={EDGE} />
      {/* 高卢-法兰克（北） */}
      <path d="M110 90 L220 70 L230 160 L180 200 L120 190 L110 130 Z" fill={COLORS.法兰克} opacity="0.7" stroke={EDGE} />
      {/* 勃艮第 */}
      <path d="M180 170 L230 160 L240 200 L200 220 L180 200 Z" fill={COLORS.勃艮第} opacity="0.7" stroke={EDGE} />
      {/* 西哥特（西班牙+南高卢） */}
      <path d="M120 210 L210 220 L230 300 L170 340 L110 320 L100 260 Z" fill={COLORS.西哥特} opacity="0.7" stroke={EDGE} />
      {/* 意大利（东哥特） */}
      <path d="M260 180 L300 190 L310 250 L290 280 L260 270 L250 220 Z" fill={COLORS.东哥特} opacity="0.7" stroke={EDGE} />
      {/* 北非（汪达尔） */}
      <path d="M80 360 L220 380 L340 390 L340 360 L240 350 L100 350 Z" fill={COLORS.汪达尔} opacity="0.7" stroke={EDGE} />
      {/* 东罗马（东部） */}
      <path d="M430 120 L560 130 L570 240 L520 280 L430 270 L420 180 Z" fill={COLORS.东罗马} opacity="0.7" stroke={EDGE} />

      {/* 标注 */}
      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="70" y="125">盎格鲁-撒克逊</text>
        <text x="140" y="125">法兰克王国</text>
        <text x="200" y="195">勃艮第</text>
        <text x="150" y="265">西哥特王国</text>
        <text x="270" y="235">东哥特王国</text>
        <text x="180" y="375">汪达尔王国</text>
        <text x="455" y="200">东罗马帝国</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="320">地中海</text>
      </g>
    </svg>
  );
}
