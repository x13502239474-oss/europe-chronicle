// 历史地图清单
// 每幅地图对应一个 SVG 组件（在 components/maps/ 目录），标注真实政权边界与年代。

export interface MapItem {
  id: string;
  title: string;
  period: string;
  description: string;
  /** 关联课程 */
  lessonId?: string;
  /** SVG 组件标识，与 MapsPage 中的映射对应 */
  component: string;
}

export const maps: MapItem[] = [
  {
    id: 'map-greek-polis',
    title: '古希腊城邦分布',
    period: '约公元前 500 年',
    description: '爱琴海两岸的希腊城邦世界：雅典、斯巴达、底比斯等主要城邦的分布，以及希腊的殖民范围。',
    lessonId: '01-04',
    component: 'GreekPolis',
  },
  {
    id: 'map-alexander',
    title: '亚历山大帝国疆域',
    period: '公元前 323 年',
    description: '亚历山大东征的路线与帝国最大疆域，从希腊到印度河流域。',
    lessonId: '01-09',
    component: 'Alexander',
  },
  {
    id: 'map-roman-expansion',
    title: '罗马共和国及帝国扩张',
    period: '公元前 500 年 — 公元 117 年',
    description: '罗马从城邦到地中海帝国的扩张过程，以及公元 2 世纪初帝国达到最大疆域。',
    lessonId: '01-13',
    component: 'RomanExpansion',
  },
  {
    id: 'map-after-rome',
    title: '西罗马帝国灭亡后的欧洲',
    period: '约公元 500 年',
    description: '蛮族诸王国在罗马废墟上建立：法兰克、西哥特、东哥特、汪达尔等王国。',
    lessonId: '02-01',
    component: 'AfterRome',
  },
  {
    id: 'map-charlemagne',
    title: '查理曼帝国',
    period: '约公元 814 年',
    description: '查理曼大帝的帝国疆域，覆盖今日法国、德国、意大利北部的大片地区。',
    lessonId: '02-05',
    component: 'Charlemagne',
  },
  {
    id: 'map-medieval-kingdoms',
    title: '中世纪欧洲主要王国',
    period: '约公元 1000 年',
    description: '中世纪盛期的欧洲政治版图：神圣罗马帝国、法兰西王国、英格兰等。',
    lessonId: '02-10',
    component: 'MedievalKingdoms',
  },
  {
    id: 'map-crusades',
    title: '十字军东征路线',
    period: '1096 — 1291 年',
    description: '历次十字军东征的路线与十字军国家（耶路撒冷王国等）的分布。',
    lessonId: '02-17',
    component: 'Crusades',
  },
  {
    id: 'map-hre',
    title: '神圣罗马帝国疆域',
    period: '约公元 1200 年',
    description: '神圣罗马帝国的疆域及其内部诸侯国的分裂格局。',
    lessonId: '02-14',
    component: 'HolyRomanEmpire',
  },
  {
    id: 'map-religion-16c',
    title: '16 世纪欧洲宗教分布',
    period: '约公元 1560 年',
    description: '宗教改革后欧洲的宗教版图：天主教、路德宗、加尔文宗、英国国教的分布。',
    lessonId: '04-06',
    component: 'Religion16c',
  },
  {
    id: 'map-napoleon',
    title: '拿破仑战争时期欧洲',
    period: '约公元 1812 年',
    description: '拿破仑帝国鼎盛时期的欧洲，附法国的附庸国与盟国。',
    lessonId: '05-20',
    component: 'Napoleon',
  },
  {
    id: 'map-vienna',
    title: '1815 年维也纳体系',
    period: '公元 1815 年',
    description: '维也纳会议后重新划分的欧洲政治版图。',
    lessonId: '05-22',
    component: 'Vienna1815',
  },
  {
    id: 'map-german-unification',
    title: '1871 年德意志统一',
    period: '公元 1871 年',
    description: '普鲁士主导下的德意志帝国建立，德意志邦国完成统一。',
    lessonId: '06-13',
    component: 'GermanUnification',
  },
  {
    id: 'map-europe-1914',
    title: '1914 年欧洲政治地图',
    period: '公元 1914 年',
    description: '第一次世界大战爆发前夕的欧洲列强格局与同盟体系。',
    lessonId: '07-01',
    component: 'Europe1914',
  },
  {
    id: 'map-post-ww1',
    title: '第一次世界大战后的欧洲',
    period: '约公元 1920 年',
    description: '凡尔赛体系下重新划定的欧洲版图，奥匈帝国等帝国的解体。',
    lessonId: '07-06',
    component: 'PostWW1',
  },
  {
    id: 'map-ww2',
    title: '第二次世界大战欧洲战场',
    period: '1939 — 1945 年',
    description: '二战欧洲战场的主要战线与纳粹德国扩张的最大范围。',
    lessonId: '07-13',
    component: 'WW2',
  },
  {
    id: 'map-cold-war',
    title: '冷战时期欧洲',
    period: '约公元 1950 年',
    description: '铁幕之下欧洲分裂为北约与华约两大阵营。',
    lessonId: '08-02',
    component: 'ColdWar',
  },
  {
    id: 'map-europe-today',
    title: '当代欧洲政治地图',
    period: '公元 21 世纪',
    description: '当代欧洲的国家格局与欧盟范围。',
    lessonId: '08-18',
    component: 'EuropeToday',
  },
];
