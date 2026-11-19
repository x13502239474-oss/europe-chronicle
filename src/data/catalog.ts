// 欧洲文明编年史 · 课程目录总表
// 内容与界面分离：这里只维护结构化的目录元数据，正文内容存于 content/ 目录的 Markdown 文件。

export interface LessonMeta {
  /** 课程编号，如 "01-03" 表示第一编第3课 */
  id: string;
  /** 课程标题 */
  title: string;
  /** 年代范围（可空） */
  period?: string;
  /** 课程类型：基础 / 重大事件 / 制度专题 / 人物专题 */
  type: '基础' | '重大事件' | '制度专题' | '人物专题';
  /** 正文 Markdown 文件相对 content 目录的路径 */
  file: string;
  /** 内容来源标注（供追溯） */
  source?: string;
}

export interface PartMeta {
  /** 编序号 */
  id: string;
  /** 编标题 */
  title: string;
  /** 编副标题/年代范围 */
  subtitle: string;
  /** 本编导读 */
  intro: string;
  lessons: LessonMeta[];
}

export const parts: PartMeta[] = [
  {
    id: 'part01',
    title: '第一编 欧洲文明的起源与古典时代',
    subtitle: '史前时期 — 公元 476 年',
    intro:
      '从史前人类到西罗马帝国灭亡，追索欧洲文明的源头：古希腊的城邦与民主、罗马的共和与帝国，以及基督教如何在这片土地上生根。这是理解其后两千年欧洲一切历史的地基。',
    lessons: [
      { id: '01-01', title: '欧洲史前文明与早期人类社会', type: '基础', file: 'part01/01-01.md' },
      { id: '01-02', title: '古代近东文明与欧洲文明的联系', type: '基础', file: 'part01/01-02.md' },
      { id: '01-03', title: '古希腊文明的起源', type: '基础', file: 'part01/01-03.md' },
      { id: '01-04', title: '希腊城邦制度', type: '制度专题', file: 'part01/01-04.md' },
      { id: '01-05', title: '雅典民主制度', type: '制度专题', file: 'part01/01-05.md' },
      { id: '01-06', title: '斯巴达政治与军事社会', type: '制度专题', file: 'part01/01-06.md' },
      { id: '01-07', title: '希波战争', type: '重大事件', file: 'part01/01-07.md' },
      { id: '01-08', title: '伯罗奔尼撒战争', type: '重大事件', file: 'part01/01-08.md' },
      { id: '01-09', title: '亚历山大大帝与希腊化时代', type: '重大事件', file: 'part01/01-09.md' },
      { id: '01-10', title: '古罗马的起源与王政时代', type: '基础', file: 'part01/01-10.md' },
      { id: '01-11', title: '罗马共和国的政治制度', type: '制度专题', file: 'part01/01-11.md' },
      { id: '01-12', title: '罗马社会阶层与法律制度', type: '制度专题', file: 'part01/01-12.md' },
      { id: '01-13', title: '罗马扩张与布匿战争', type: '重大事件', file: 'part01/01-13.md' },
      { id: '01-14', title: '罗马共和国的危机', type: '重大事件', file: 'part01/01-14.md' },
      { id: '01-15', title: '凯撒与共和国的终结', type: '重大事件', file: 'part01/01-15.md' },
      { id: '01-16', title: '奥古斯都与罗马帝国的建立', type: '重大事件', file: 'part01/01-16.md' },
      { id: '01-17', title: '罗马帝国的政治、经济和社会结构', type: '制度专题', file: 'part01/01-17.md' },
      { id: '01-18', title: '罗马帝国的扩张与边疆治理', type: '制度专题', file: 'part01/01-18.md' },
      { id: '01-19', title: '基督教的起源与传播', type: '基础', file: 'part01/01-19.md' },
      { id: '01-20', title: '罗马帝国的危机与分裂', type: '重大事件', file: 'part01/01-20.md' },
      { id: '01-21', title: '西罗马帝国的灭亡', type: '重大事件', file: 'part01/01-21.md' },
    ],
  },
  {
    id: 'part02',
    title: '第二编 中世纪欧洲与基督教世界',
    subtitle: '约 476 — 1453 年',
    intro:
      '西罗马帝国灭亡后，日耳曼诸王国、拜占庭帝国与新兴的基督教会共同塑造了中世纪的欧洲。封建制度、骑士、十字军、城市复兴与百年战争，构成了一幅壮阔而复杂的历史长卷。本编充分运用剑桥中世纪史系列的研究成果。',
    lessons: [
      { id: '02-01', title: '西罗马帝国灭亡后的欧洲', type: '基础', file: 'part02/02-01.md' },
      { id: '02-02', title: '日耳曼民族迁徙', type: '基础', file: 'part02/02-02.md' },
      { id: '02-03', title: '法兰克王国的建立', type: '基础', file: 'part02/02-03.md' },
      { id: '02-04', title: '克洛维与法兰克国家', type: '人物专题', file: 'part02/02-04.md' },
      { id: '02-05', title: '查理曼帝国', type: '重大事件', file: 'part02/02-05.md' },
      { id: '02-06', title: '加洛林帝国的政治结构', type: '制度专题', file: 'part02/02-06.md' },
      { id: '02-07', title: '帝国分裂与欧洲格局变化', type: '重大事件', file: 'part02/02-07.md' },
      { id: '02-08', title: '拜占庭帝国的历史', type: '基础', file: 'part02/02-08.md' },
      { id: '02-09', title: '东正教与天主教', type: '基础', file: 'part02/02-09.md' },
      { id: '02-10', title: '欧洲封建制度的形成', type: '制度专题', file: 'part02/02-10.md' },
      { id: '02-11', title: '庄园经济与农村社会', type: '制度专题', file: 'part02/02-11.md' },
      { id: '02-12', title: '骑士制度与贵族阶层', type: '制度专题', file: 'part02/02-12.md' },
      { id: '02-13', title: '教皇权力与世俗王权', type: '制度专题', file: 'part02/02-13.md' },
      { id: '02-14', title: '神圣罗马帝国', type: '制度专题', file: 'part02/02-14.md' },
      { id: '02-15', title: '英格兰王权的发展', type: '基础', file: 'part02/02-15.md' },
      { id: '02-16', title: '法兰西王权的发展', type: '基础', file: 'part02/02-16.md' },
      { id: '02-17', title: '十字军东征', type: '重大事件', file: 'part02/02-17.md' },
      { id: '02-18', title: '中世纪城市与商业复兴', type: '制度专题', file: 'part02/02-18.md' },
      { id: '02-19', title: '汉萨同盟与欧洲贸易', type: '制度专题', file: 'part02/02-19.md' },
      { id: '02-20', title: '中世纪大学与经院哲学', type: '基础', file: 'part02/02-20.md' },
      { id: '02-21', title: '黑死病与欧洲社会危机', type: '重大事件', file: 'part02/02-21.md' },
      { id: '02-22', title: '百年战争', type: '重大事件', file: 'part02/02-22.md' },
      { id: '02-23', title: '拜占庭帝国的衰落', type: '重大事件', file: 'part02/02-23.md' },
      { id: '02-24', title: '君士坦丁堡陷落', type: '重大事件', file: 'part02/02-24.md' },
    ],
  },
  {
    id: 'part03',
    title: '第三编 文艺复兴与地理大发现',
    subtitle: '约 1300 — 1600 年',
    intro:
      '当黑死病的阴影散去，欧洲在意大利城邦中迎来了思想的复兴，在远洋航海中开启了世界的联结。人文主义、艺术与科学的勃兴，与大航海时代的经济剧变，共同拉开了近代的序幕。',
    lessons: [
      { id: '03-01', title: '中世纪晚期的欧洲社会', type: '基础', file: 'part03/03-01.md' },
      { id: '03-02', title: '意大利城邦的发展', type: '基础', file: 'part03/03-02.md' },
      { id: '03-03', title: '文艺复兴的历史背景', type: '基础', file: 'part03/03-03.md' },
      { id: '03-04', title: '人文主义思想', type: '基础', file: 'part03/03-04.md' },
      { id: '03-05', title: '佛罗伦萨与美第奇家族', type: '人物专题', file: 'part03/03-05.md' },
      { id: '03-06', title: '文艺复兴时期的政治文化', type: '基础', file: 'part03/03-06.md' },
      { id: '03-07', title: '文艺复兴艺术与科学', type: '基础', file: 'part03/03-07.md' },
      { id: '03-08', title: '印刷术与知识传播', type: '基础', file: 'part03/03-08.md' },
      { id: '03-09', title: '葡萄牙海外扩张', type: '重大事件', file: 'part03/03-09.md' },
      { id: '03-10', title: '西班牙海外扩张', type: '重大事件', file: 'part03/03-10.md' },
      { id: '03-11', title: '哥伦布与新大陆', type: '重大事件', file: 'part03/03-11.md' },
      { id: '03-12', title: '欧洲殖民扩张的开始', type: '重大事件', file: 'part03/03-12.md' },
      { id: '03-13', title: '大航海时代对欧洲经济的影响', type: '基础', file: 'part03/03-13.md' },
      { id: '03-14', title: '商业革命与资本主义发展', type: '制度专题', file: 'part03/03-14.md' },
    ],
  },
  {
    id: 'part04',
    title: '第四编 宗教改革与近代欧洲国家体系',
    subtitle: '1517 — 1648 年',
    intro:
      '一纸九十五条论纲撕开了统一基督教世界的裂缝，也重塑了欧洲的政治版图。宗教改革、反宗教改革与三十年战争，最终以威斯特伐利亚和约确立了近代主权国家体系的雏形。',
    lessons: [
      { id: '04-01', title: '天主教会的危机', type: '基础', file: 'part04/04-01.md' },
      { id: '04-02', title: '马丁·路德与宗教改革', type: '人物专题', file: 'part04/04-02.md' },
      { id: '04-03', title: '加尔文主义', type: '基础', file: 'part04/04-03.md' },
      { id: '04-04', title: '英国宗教改革', type: '重大事件', file: 'part04/04-04.md' },
      { id: '04-05', title: '天主教反宗教改革', type: '重大事件', file: 'part04/04-05.md' },
      { id: '04-06', title: '宗教改革对欧洲政治的影响', type: '基础', file: 'part04/04-06.md' },
      { id: '04-07', title: '哈布斯堡王朝的崛起', type: '基础', file: 'part04/04-07.md' },
      { id: '04-08', title: '西班牙帝国', type: '基础', file: 'part04/04-08.md' },
      { id: '04-09', title: '法国宗教战争', type: '重大事件', file: 'part04/04-09.md' },
      { id: '04-10', title: '三十年战争', type: '重大事件', file: 'part04/04-10.md' },
      { id: '04-11', title: '威斯特伐利亚和约', type: '重大事件', file: 'part04/04-11.md' },
      { id: '04-12', title: '近代主权国家体系的形成', type: '制度专题', file: 'part04/04-12.md' },
    ],
  },
  {
    id: 'part05',
    title: '第五编 君主专制、启蒙运动与革命时代',
    subtitle: '1648 — 1815 年',
    intro:
      '绝对君主制的鼎盛与启蒙思想的勃发相撞，催生了现代世界的政治革命。从路易十四的凡尔赛到法国大革命的断头台，再到拿破仑的铁蹄踏遍欧洲，旧秩序的根基被彻底动摇。',
    lessons: [
      { id: '05-01', title: '欧洲君主专制的发展', type: '制度专题', file: 'part05/05-01.md' },
      { id: '05-02', title: '路易十四与法国绝对君主制', type: '人物专题', file: 'part05/05-02.md' },
      { id: '05-03', title: '英国资产阶级革命', type: '重大事件', file: 'part05/05-03.md' },
      { id: '05-04', title: '光荣革命', type: '重大事件', file: 'part05/05-04.md' },
      { id: '05-05', title: '英国议会制度的发展', type: '制度专题', file: 'part05/05-05.md' },
      { id: '05-06', title: '启蒙运动的历史背景', type: '基础', file: 'part05/05-06.md' },
      { id: '05-07', title: '洛克与自由主义', type: '人物专题', file: 'part05/05-07.md' },
      { id: '05-08', title: '孟德斯鸠与三权分立', type: '人物专题', file: 'part05/05-08.md' },
      { id: '05-09', title: '卢梭与人民主权', type: '人物专题', file: 'part05/05-09.md' },
      { id: '05-10', title: '启蒙思想与欧洲政治改革', type: '基础', file: 'part05/05-10.md' },
      { id: '05-11', title: '普鲁士的崛起', type: '基础', file: 'part05/05-11.md' },
      { id: '05-12', title: '奥地利与哈布斯堡君主国', type: '基础', file: 'part05/05-12.md' },
      { id: '05-13', title: '俄国彼得大帝改革', type: '人物专题', file: 'part05/05-13.md' },
      { id: '05-14', title: '七年战争', type: '重大事件', file: 'part05/05-14.md' },
      { id: '05-15', title: '法国大革命的深层原因', type: '基础', file: 'part05/05-15.md' },
      { id: '05-16', title: '法国大革命的爆发', type: '重大事件', file: 'part05/05-16.md' },
      { id: '05-17', title: '君主立宪制与共和国', type: '重大事件', file: 'part05/05-17.md' },
      { id: '05-18', title: '雅各宾专政与恐怖统治', type: '重大事件', file: 'part05/05-18.md' },
      { id: '05-19', title: '拿破仑的崛起', type: '人物专题', file: 'part05/05-19.md' },
      { id: '05-20', title: '拿破仑战争', type: '重大事件', file: 'part05/05-20.md' },
      { id: '05-21', title: '拿破仑法典', type: '制度专题', file: 'part05/05-21.md' },
      { id: '05-22', title: '维也纳会议与欧洲新秩序', type: '重大事件', file: 'part05/05-22.md' },
    ],
  },
  {
    id: 'part06',
    title: '第六编 十九世纪欧洲与现代国家形成',
    subtitle: '1815 — 1914 年',
    intro:
      '工业革命的机器轰鸣声中，民族主义与社会主义的浪潮重塑了欧洲的版图与心灵。意大利与德意志的统一、帝国主义的全球扩张，将欧洲推向了前所未有的强盛，也埋下了大战的种子。',
    lessons: [
      { id: '06-01', title: '维也纳体系与欧洲协调', type: '制度专题', file: 'part06/06-01.md' },
      { id: '06-02', title: '保守主义与自由主义', type: '基础', file: 'part06/06-02.md' },
      { id: '06-03', title: '1830年革命', type: '重大事件', file: 'part06/06-03.md' },
      { id: '06-04', title: '1848年欧洲革命', type: '重大事件', file: 'part06/06-04.md' },
      { id: '06-05', title: '工业革命的历史背景', type: '基础', file: 'part06/06-05.md' },
      { id: '06-06', title: '英国工业革命', type: '重大事件', file: 'part06/06-06.md' },
      { id: '06-07', title: '欧洲工业化与社会结构变化', type: '制度专题', file: 'part06/06-07.md' },
      { id: '06-08', title: '资本主义经济体系的发展', type: '制度专题', file: 'part06/06-08.md' },
      { id: '06-09', title: '马克思主义的形成', type: '人物专题', file: 'part06/06-09.md' },
      { id: '06-10', title: '工人运动与社会主义', type: '基础', file: 'part06/06-10.md' },
      { id: '06-11', title: '民族主义的兴起', type: '基础', file: 'part06/06-11.md' },
      { id: '06-12', title: '意大利统一', type: '重大事件', file: 'part06/06-12.md' },
      { id: '06-13', title: '德意志统一', type: '重大事件', file: 'part06/06-13.md' },
      { id: '06-14', title: '普鲁士与俾斯麦', type: '人物专题', file: 'part06/06-14.md' },
      { id: '06-15', title: '俄罗斯帝国的发展', type: '基础', file: 'part06/06-15.md' },
      { id: '06-16', title: '奥匈帝国的民族问题', type: '基础', file: 'part06/06-16.md' },
      { id: '06-17', title: '巴尔干半岛的民族冲突', type: '基础', file: 'part06/06-17.md' },
      { id: '06-18', title: '欧洲殖民主义与帝国主义', type: '制度专题', file: 'part06/06-18.md' },
      { id: '06-19', title: '欧洲列强竞争', type: '基础', file: 'part06/06-19.md' },
      { id: '06-20', title: '第一次世界大战前的国际体系', type: '制度专题', file: 'part06/06-20.md' },
    ],
  },
  {
    id: 'part07',
    title: '第七编 世界大战与欧洲秩序崩溃',
    subtitle: '1914 — 1945 年',
    intro:
      '两次世界大战在三十年间将欧洲的旧秩序彻底碾碎。从凡尔赛的屈辱到纳粹的崛起，从闪电战到大屠杀，这一段历史以最惨烈的方式揭示了民族主义、极权与战争之间的致命关联。',
    lessons: [
      { id: '07-01', title: '第一次世界大战的根源', type: '基础', file: 'part07/07-01.md' },
      { id: '07-02', title: '第一次世界大战的爆发', type: '重大事件', file: 'part07/07-02.md' },
      { id: '07-03', title: '西线与东线战场', type: '重大事件', file: 'part07/07-03.md' },
      { id: '07-04', title: '俄国革命', type: '重大事件', file: 'part07/07-04.md' },
      { id: '07-05', title: '德意志帝国的崩溃', type: '重大事件', file: 'part07/07-05.md' },
      { id: '07-06', title: '凡尔赛条约', type: '重大事件', file: 'part07/07-06.md' },
      { id: '07-07', title: '战间期欧洲', type: '基础', file: 'part07/07-07.md' },
      { id: '07-08', title: '魏玛共和国', type: '制度专题', file: 'part07/07-08.md' },
      { id: '07-09', title: '意大利法西斯主义', type: '基础', file: 'part07/07-09.md' },
      { id: '07-10', title: '纳粹主义的形成', type: '基础', file: 'part07/07-10.md' },
      { id: '07-11', title: '希特勒与德国政治', type: '人物专题', file: 'part07/07-11.md' },
      { id: '07-12', title: '西班牙内战', type: '重大事件', file: 'part07/07-12.md' },
      { id: '07-13', title: '第二次世界大战的爆发', type: '重大事件', file: 'part07/07-13.md' },
      { id: '07-14', title: '德国闪击战', type: '重大事件', file: 'part07/07-14.md' },
      { id: '07-15', title: '欧洲战场与苏德战争', type: '重大事件', file: 'part07/07-15.md' },
      { id: '07-16', title: '纳粹占领与欧洲抵抗运动', type: '基础', file: 'part07/07-16.md' },
      { id: '07-17', title: '大屠杀', type: '重大事件', file: 'part07/07-17.md' },
      { id: '07-18', title: '诺曼底登陆', type: '重大事件', file: 'part07/07-18.md' },
      { id: '07-19', title: '纳粹德国的覆灭', type: '重大事件', file: 'part07/07-19.md' },
      { id: '07-20', title: '第二次世界大战对欧洲的影响', type: '基础', file: 'part07/07-20.md' },
    ],
  },
  {
    id: 'part08',
    title: '第八编 战后欧洲与当代欧洲',
    subtitle: '1945 年至今',
    intro:
      '从冷战的铁幕到柏林墙的倒塌，从欧洲一体化到英国脱欧，当代欧洲在废墟上重建、在分裂中整合、在全球化中寻找自我。这是仍在书写中的历史。',
    lessons: [
      { id: '08-01', title: '战后欧洲重建', type: '重大事件', file: 'part08/08-01.md' },
      { id: '08-02', title: '冷战与欧洲分裂', type: '重大事件', file: 'part08/08-02.md' },
      { id: '08-03', title: '北约与华约', type: '制度专题', file: 'part08/08-03.md' },
      { id: '08-04', title: '西欧福利国家的发展', type: '制度专题', file: 'part08/08-04.md' },
      { id: '08-05', title: '欧洲经济共同体', type: '制度专题', file: 'part08/08-05.md' },
      { id: '08-06', title: '法国与戴高乐主义', type: '人物专题', file: 'part08/08-06.md' },
      { id: '08-07', title: '德国分裂与柏林墙', type: '重大事件', file: 'part08/08-07.md' },
      { id: '08-08', title: '苏联对东欧的控制', type: '基础', file: 'part08/08-08.md' },
      { id: '08-09', title: '匈牙利事件与布拉格之春', type: '重大事件', file: 'part08/08-09.md' },
      { id: '08-10', title: '欧洲社会运动', type: '基础', file: 'part08/08-10.md' },
      { id: '08-11', title: '东欧剧变', type: '重大事件', file: 'part08/08-11.md' },
      { id: '08-12', title: '柏林墙倒塌', type: '重大事件', file: 'part08/08-12.md' },
      { id: '08-13', title: '苏联解体', type: '重大事件', file: 'part08/08-13.md' },
      { id: '08-14', title: '德国统一', type: '重大事件', file: 'part08/08-14.md' },
      { id: '08-15', title: '欧洲联盟的形成', type: '制度专题', file: 'part08/08-15.md' },
      { id: '08-16', title: '欧元与欧洲经济一体化', type: '制度专题', file: 'part08/08-16.md' },
      { id: '08-17', title: '英国脱欧', type: '重大事件', file: 'part08/08-17.md' },
      { id: '08-18', title: '当代欧洲政治格局', type: '基础', file: 'part08/08-18.md' },
      { id: '08-19', title: '欧洲移民与社会问题', type: '基础', file: 'part08/08-19.md' },
      { id: '08-20', title: '当代欧洲面临的挑战', type: '基础', file: 'part08/08-20.md' },
    ],
  },
];

/** 所有课程扁平化列表（供搜索、翻页使用） */
export const allLessons = parts.flatMap((p) =>
  p.lessons.map((l) => ({ ...l, partId: p.id, partTitle: p.title })),
);

export function getPart(partId: string): PartMeta | undefined {
  return parts.find((p) => p.id === partId);
}

export function getLesson(lessonId: string) {
  return allLessons.find((l) => l.id === lessonId);
}
