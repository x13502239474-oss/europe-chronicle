/**
 * 亚历山大帝国疆域图（公元前 323 年）
 * 展示亚历山大东征路线与帝国最大疆域，从希腊延伸到印度河流域。
 */

const SEA = '#cfe0ea';
const EMPIRE = '#d8c49a';
const EMPIRE_EDGE = '#a98f5a';
const OTHER = '#e8e2d2';
const OTHER_EDGE = '#b8ad93';
const ROUTE = '#8a2f3b';
const LABEL = '#3a3329';

export function AlexanderMap() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="亚历山大帝国疆域图">
      <rect width="680" height="420" fill={SEA} />
      <text x="20" y="30" fontFamily="serif" fontSize="18" fill={LABEL} fontWeight="bold">
        亚历山大帝国疆域（公元前 323 年）
      </text>

      {/* 帝国疆域（示意轮廓，从马其顿到印度河） */}
      <path
        d="M70 180 L110 150 L150 130 L200 110 L260 100 L340 95 L430 100 L520 110 L590 140 L620 180 L600 240 L550 260 L480 250 L410 240 L350 230 L290 225 L230 230 L170 240 L120 235 L70 210 Z"
        fill={EMPIRE} stroke={EMPIRE_EDGE} strokeWidth="1.5"
      />

      {/* 外围非帝国地区 */}
      <path d="M40 180 L70 180 L70 210 L120 235 L40 250 Z" fill={OTHER} stroke={OTHER_EDGE} strokeWidth="1.5" />
      <path d="M620 180 L660 180 L660 260 L600 240 L620 180 Z" fill={OTHER} stroke={OTHER_EDGE} strokeWidth="1.5" />

      {/* 东征路线 */}
      <path
        d="M105 170 L200 140 L300 130 L400 135 L500 145 L560 170 L590 205 L540 230"
        fill="none" stroke={ROUTE} strokeWidth="2.5" strokeDasharray="6 5"
      />

      {/* 关键地点 */}
      <g fontFamily="serif" fontSize="13" fill={LABEL}>
        <circle cx="105" cy="170" r="5" fill={ROUTE} />
        <text x="95" y="155">佩拉（马其顿）</text>
        <circle cx="200" cy="140" r="4" fill={ROUTE} />
        <text x="185" y="125">特洛伊</text>
        <circle cx="300" cy="130" r="4" fill={ROUTE} />
        <text x="305" y="120">戈尔迪乌姆</text>
        <circle cx="400" cy="135" r="4" fill={ROUTE} />
        <text x="380" y="118">伊苏斯</text>
        <circle cx="500" cy="145" r="4" fill={ROUTE} />
        <text x="505" y="130">高加米拉</text>
        <circle cx="560" cy="170" r="4" fill={ROUTE} />
        <text x="566" y="165">巴比伦</text>
        <circle cx="590" cy="205" r="4" fill={ROUTE} />
        <text x="596" y="200">苏萨</text>
        <circle cx="540" cy="230" r="4" fill={ROUTE} />
        <text x="548" y="250">波斯波利斯</text>
      </g>

      {/* 地理标注 */}
      <g fontFamily="serif" fontSize="13" fill="#5a7a90" fontStyle="italic">
        <text x="60" y="100">欧洲</text>
        <text x="330" y="85">亚洲</text>
        <text x="380" y="330">阿拉伯半岛</text>
        <text x="120" y="330">地中海</text>
        <text x="600" y="340">印度</text>
      </g>

      {/* 图例 */}
      <g fontFamily="sans-serif" fontSize="12" fill={LABEL}>
        <rect x="40" y="390" width="10" height="10" fill={EMPIRE} stroke={EMPIRE_EDGE} />
        <text x="56" y="400">帝国疆域</text>
        <line x1="150" y1="395" x2="190" y2="395" stroke={ROUTE} strokeWidth="2.5" strokeDasharray="6 5" />
        <text x="196" y="400">东征路线</text>
      </g>
    </svg>
  );
}
