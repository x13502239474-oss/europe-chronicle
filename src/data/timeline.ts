// 欧洲历史时间轴 · 各时期关键节点
// 用于首页预览与时间轴页面。每个事件关联到对应课程（lessonId 可空）。

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  lessonId?: string;
}

export interface TimelineEra {
  id: string;
  name: string;
  range: string;
  events: TimelineEvent[];
}

export const timeline: TimelineEra[] = [
  {
    id: 'ancient',
    name: '古典时代',
    range: '史前 — 公元 476',
    events: [
      { year: '约前 2000', title: '爱琴文明兴起', description: '克里特岛的米诺斯文明与希腊本土的迈锡尼文明先后繁荣。', lessonId: '01-03' },
      { year: '前 508', title: '雅典民主改革', description: '克利斯提尼改革奠定雅典民主制度的基础。', lessonId: '01-05' },
      { year: '前 490—前 479', title: '希波战争', description: '希腊城邦联合击败波斯帝国的两次入侵。', lessonId: '01-07' },
      { year: '前 431—前 404', title: '伯罗奔尼撒战争', description: '雅典与斯巴达的争霸战争，希腊城邦由盛转衰。', lessonId: '01-08' },
      { year: '前 336—前 323', title: '亚历山大大帝', description: '马其顿崛起，建立横跨欧亚非的帝国，开启希腊化时代。', lessonId: '01-09' },
      { year: '前 264—前 146', title: '布匿战争', description: '罗马击败迦太基，确立西地中海霸权。', lessonId: '01-13' },
      { year: '前 27', title: '奥古斯都建立元首制', description: '屋大维获"奥古斯都"尊号，罗马共和国转变为帝国。', lessonId: '01-16' },
      { year: '313', title: '米兰敕令', description: '君士坦丁与李锡尼颁布敕令，基督教获得合法地位。', lessonId: '01-19' },
      { year: '476', title: '西罗马帝国灭亡', description: '蛮族将领奥多亚克废黜末代皇帝罗慕路斯。', lessonId: '01-21' },
    ],
  },
  {
    id: 'medieval',
    name: '中世纪',
    range: '476 — 1453',
    events: [
      { year: '496', title: '克洛维皈依', description: '法兰克国王克洛维接受基督教，法兰克王国崛起。', lessonId: '02-04' },
      { year: '800', title: '查理曼加冕', description: '查理曼在罗马被教皇加冕为皇帝，加洛林帝国鼎盛。', lessonId: '02-05' },
      { year: '843', title: '凡尔登条约', description: '加洛林帝国三分，奠定后世法德意雏形。', lessonId: '02-07' },
      { year: '1066', title: '诺曼征服', description: '威廉一世征服英格兰，重塑英格兰王权。', lessonId: '02-15' },
      { year: '1096—1099', title: '第一次十字军东征', description: '十字军攻占耶路撒冷，建立十字军国家。', lessonId: '02-17' },
      { year: '1215', title: '《大宪章》', description: '英格兰贵族迫使约翰王签署，限制王权。', lessonId: '02-15' },
      { year: '1347—1351', title: '黑死病', description: '鼠疫席卷欧洲，人口锐减，社会剧烈震荡。', lessonId: '02-21' },
      { year: '1337—1453', title: '百年战争', description: '英法为争夺王位与领土展开长期战争。', lessonId: '02-22' },
      { year: '1453', title: '君士坦丁堡陷落', description: '奥斯曼土耳其攻陷拜占庭首都，中世纪终结。', lessonId: '02-24' },
    ],
  },
  {
    id: 'renaissance',
    name: '文艺复兴与地理大发现',
    range: '约 1300 — 1600',
    events: [
      { year: '约 1450', title: '古腾堡印刷术', description: '活字印刷术推动知识传播，加速思想变革。', lessonId: '03-08' },
      { year: '1492', title: '哥伦布抵达美洲', description: '西班牙资助的远航开启大航海时代。', lessonId: '03-11' },
      { year: '1498', title: '达·伽马抵达印度', description: '葡萄牙打通绕非洲的东方航路。', lessonId: '03-09' },
      { year: '1508—1512', title: '米开朗基罗绘西斯廷', description: '文艺复兴艺术巅峰之作。', lessonId: '03-07' },
    ],
  },
  {
    id: 'reformation',
    name: '宗教改革',
    range: '1517 — 1648',
    events: [
      { year: '1517', title: '九十五条论纲', description: '路德张贴论纲，宗教改革爆发。', lessonId: '04-02' },
      { year: '1534', title: '英国宗教改革', description: '亨利八世建立英国国教，与罗马决裂。', lessonId: '04-04' },
      { year: '1545—1563', title: '特伦托公会议', description: '天主教反宗教改革的核心会议。', lessonId: '04-05' },
      { year: '1618—1648', title: '三十年战争', description: '欧洲宗教与政治大混战，以威斯特伐利亚和约告终。', lessonId: '04-10' },
    ],
  },
  {
    id: 'absolutism',
    name: '专制与启蒙',
    range: '1648 — 1815',
    events: [
      { year: '1688', title: '光荣革命', description: '英国确立君主立宪制。', lessonId: '05-04' },
      { year: '1715', title: '路易十四去世', description: '法国绝对君主制的象征。', lessonId: '05-02' },
      { year: '1762', title: '《社会契约论》', description: '卢梭提出人民主权思想。', lessonId: '05-09' },
      { year: '1789', title: '法国大革命爆发', description: '攻占巴士底狱，旧制度崩溃。', lessonId: '05-16' },
      { year: '1804', title: '拿破仑称帝', description: '颁布《拿破仑法典》，征战欧洲。', lessonId: '05-19' },
      { year: '1815', title: '维也纳会议', description: '战胜国重建欧洲秩序。', lessonId: '05-22' },
    ],
  },
  {
    id: 'nineteenth',
    name: '十九世纪',
    range: '1815 — 1914',
    events: [
      { year: '1848', title: '欧洲革命', description: '席卷欧洲的自由主义与民族主义革命浪潮。', lessonId: '06-04' },
      { year: '1861', title: '意大利统一', description: '意大利王国建立。', lessonId: '06-12' },
      { year: '1871', title: '德意志统一', description: '俾斯麦推动下德意志帝国建立。', lessonId: '06-13' },
      { year: '1848', title: '《共产党宣言》', description: '马克思、恩格斯发表，社会主义理论奠基。', lessonId: '06-09' },
      { year: '1914', title: '一战爆发前夕', description: '欧洲列强军备竞赛与同盟体系对峙。', lessonId: '06-20' },
    ],
  },
  {
    id: 'worldwars',
    name: '世界大战',
    range: '1914 — 1945',
    events: [
      { year: '1914—1918', title: '第一次世界大战', description: '欧洲文明的大规模自我毁灭。', lessonId: '07-02' },
      { year: '1917', title: '俄国革命', description: '十月革命建立苏维埃政权。', lessonId: '07-04' },
      { year: '1919', title: '凡尔赛条约', description: '对德和约埋下复仇种子。', lessonId: '07-06' },
      { year: '1933', title: '希特勒上台', description: '纳粹党执政，德国走向极权。', lessonId: '07-11' },
      { year: '1939—1945', title: '第二次世界大战', description: '欧洲陷入最惨烈的战争与浩劫。', lessonId: '07-13' },
    ],
  },
  {
    id: 'contemporary',
    name: '战后与当代',
    range: '1945 — 至今',
    events: [
      { year: '1945', title: '冷战开始', description: '欧洲分裂为东西两大阵营。', lessonId: '08-02' },
      { year: '1957', title: '《罗马条约》', description: '欧洲经济共同体成立，一体化起步。', lessonId: '08-05' },
      { year: '1961', title: '柏林墙修建', description: '东西德分裂的象征。', lessonId: '08-07' },
      { year: '1989', title: '柏林墙倒塌', description: '东欧剧变，冷战走向终结。', lessonId: '08-12' },
      { year: '1991', title: '苏联解体', description: '冷战正式结束。', lessonId: '08-13' },
      { year: '1993', title: '欧盟成立', description: '《马斯特里赫特条约》生效。', lessonId: '08-15' },
      { year: '2002', title: '欧元流通', description: '欧洲货币一体化实现。', lessonId: '08-16' },
      { year: '2016', title: '英国脱欧公投', description: '英国决定退出欧盟。', lessonId: '08-17' },
    ],
  },
];
