/**
 * 古希腊城邦分布图（约公元前 500 年）
 * 示意爱琴海两岸的希腊世界：巴尔干半岛、小亚细亚西岸及主要城邦位置。
 * 地图为教学示意，非精确投影。
 */

const SEA = '#cfe0ea';
const LAND = '#e8e2d2';
const LAND_EDGE = '#b8ad93';
const POLIS = '#8a2f3b';
const LABEL = '#3a3329';

export function GreekPolisMap() {
  return (
    <svg viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="古希腊城邦分布图">
      <rect width="680" height="480" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        古希腊城邦分布（约公元前 500 年）
      </text>

      {/* 巴尔干半岛 / 希腊本土 */}
      <path
        d="M60 120 L150 60 L230 80 L260 140 L240 220 L200 280 L140 300 L90 260 L60 200 Z"
        fill={LAND} stroke={LAND_EDGE} strokeWidth="1.5"
      />
      {/* 伯罗奔尼撒半岛（南部，通过科林斯地峡相连） */}
      <path
        d="M140 300 L200 280 L230 330 L210 400 L160 420 L120 370 L140 300 Z"
        fill={LAND} stroke={LAND_EDGE} strokeWidth="1.5"
      />
      {/* 小亚细亚西岸 */}
      <path
        d="M520 40 L640 60 L650 180 L620 320 L560 360 L530 260 L520 160 Z"
        fill={LAND} stroke={LAND_EDGE} strokeWidth="1.5"
      />
      {/* 克里特岛 */}
      <ellipse cx="430" cy="360" rx="90" ry="18" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.5" />
      {/* 罗德岛 */}
      <ellipse cx="600" cy="360" rx="28" ry="10" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.5" />
      {/* 优卑亚岛 */}
      <path d="M280 150 L330 145 L330 175 L280 180 Z" fill={LAND} stroke={LAND_EDGE} strokeWidth="1.5" />

      {/* 城邦位置与标注 */}
      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        {/* 雅典 */}
        <circle cx="250" cy="205" r="5" fill={POLIS} />
        <text x="258" y="200">雅典</text>
        {/* 斯巴达 */}
        <circle cx="150" cy="340" r="5" fill={POLIS} />
        <text x="115" y="365">斯巴达</text>
        {/* 底比斯 */}
        <circle cx="225" cy="190" r="4" fill={POLIS} />
        <text x="180" y="185">底比斯</text>
        {/* 科林斯 */}
        <circle cx="175" cy="290" r="4" fill={POLIS} />
        <text x="183" y="295">科林斯</text>
        {/* 阿尔戈斯 */}
        <circle cx="165" cy="320" r="4" fill={POLIS} />
        <text x="100" y="330">阿尔戈斯</text>
        {/* 米利都（小亚细亚） */}
        <circle cx="565" cy="260" r="4" fill={POLIS} />
        <text x="572" y="255">米利都</text>
        {/* 以弗所 */}
        <circle cx="560" cy="230" r="4" fill={POLIS} />
        <text x="568" y="228">以弗所</text>
        {/* 克诺索斯（克里特） */}
        <circle cx="430" cy="355" r="4" fill={POLIS} />
        <text x="438" y="352">克诺索斯</text>
      </g>

      {/* 海域标注 */}
      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="360" y="230">爱琴海</text>
        <text x="80" y="100">爱奥尼亚海</text>
        <text x="340" y="400">地中海</text>
      </g>

      {/* 图例 */}
      <g fontFamily="sans-serif" fontSize="12" fill={LABEL}>
        <rect x="500" y="420" width="10" height="10" fill={POLIS} rx="2" />
        <text x="516" y="430">城邦</text>
        <rect x="565" y="420" width="10" height="10" fill={LAND} stroke={LAND_EDGE} />
        <text x="581" y="430">陆地</text>
      </g>
    </svg>
  );
}
