/**
 * 第一次世界大战后的欧洲（约公元 1920 年）
 */

const SEA = '#cfe0ea';
const EDGE = '#b8ad93';
const LABEL = '#3a3329';

export function PostWW1Map() {
  return (
    <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="一战后欧洲版图">
      <rect width="680" height="440" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        第一次世界大战后的欧洲（约公元 1920 年）
      </text>

      <path d="M40 80 L90 70 L100 130 L70 170 L40 150 Z" fill="#4a6fa5" opacity="0.7" stroke={EDGE} />
      <path d="M100 90 L200 70 L220 140 L180 180 L110 170 Z" fill="#6b8f4a" opacity="0.7" stroke={EDGE} />
      {/* 缩小后的德国 */}
      <path d="M240 90 L340 80 L350 150 L300 190 L250 170 Z" fill="#8a4b3a" opacity="0.7" stroke={EDGE} />
      {/* 新建国家 */}
      <path d="M350 80 L430 90 L440 160 L380 190 L350 160 Z" fill="#c59a5e" opacity="0.7" stroke={EDGE} />
      <path d="M430 90 L500 100 L510 170 L460 200 L440 160 Z" fill="#7a5a8a" opacity="0.7" stroke={EDGE} />
      <path d="M500 50 L620 60 L630 150 L570 190 L500 160 Z" fill="#5a7a8a" opacity="0.7" stroke={EDGE} />
      {/* 奥匈解体后的诸国 */}
      <path d="M250 180 L340 180 L350 240 L300 260 L250 240 Z" fill="#a56b3a" opacity="0.7" stroke={EDGE} />
      <path d="M400 200 L470 200 L480 260 L430 280 L400 250 Z" fill="#6b8f4a" opacity="0.6" stroke={EDGE} />

      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <text x="55" y="120">英国</text>
        <text x="130" y="130">法国</text>
        <text x="260" y="125">德国</text>
        <text x="370" y="135">波兰</text>
        <text x="450" y="135">捷克</text>
        <text x="540" y="120">苏联</text>
        <text x="280" y="215">奥地利/匈牙利</text>
        <text x="425" y="235">南斯拉夫</text>
      </g>

      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="340">地中海</text>
      </g>
    </svg>
  );
}
