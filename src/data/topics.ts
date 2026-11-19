// 独立历史知识专题资料库 + 重要历史人物档案 目录
// 内容与界面分离：此处只维护目录元数据，正文另行编写。

export interface TopicGroup {
  id: string;
  title: string;
  description: string;
  items: TopicItem[];
}

export interface TopicItem {
  id: string;
  title: string;
  /** 相关课程编号，用于建立专题与课程的关联 */
  relatedLessons?: string[];
  /** 状态：已完成正文 / 待编写 */
  status: 'done' | 'todo';
}

export const topicGroups: TopicGroup[] = [
  {
    id: 'politics',
    title: '欧洲政治制度史',
    description: '从雅典民主到现代民族国家，制度是理解欧洲政治演进的主线。',
    items: [
      { id: 'pol-athens', title: '雅典民主制度', relatedLessons: ['01-05'], status: 'todo' },
      { id: 'pol-rome', title: '罗马共和国制度', relatedLessons: ['01-11'], status: 'todo' },
      { id: 'pol-law', title: '罗马法', relatedLessons: ['01-12'], status: 'todo' },
      { id: 'pol-feudal', title: '中世纪封建制度', relatedLessons: ['02-10'], status: 'todo' },
      { id: 'pol-papacy', title: '教皇制度', relatedLessons: ['02-13'], status: 'todo' },
      { id: 'pol-abs', title: '君主专制', relatedLessons: ['05-01', '05-02'], status: 'todo' },
      { id: 'pol-parl', title: '英国议会制度', relatedLessons: ['05-05'], status: 'todo' },
      { id: 'pol-demo', title: '现代民主制度', relatedLessons: [], status: 'todo' },
      { id: 'pol-nation', title: '民族国家形成', relatedLessons: ['06-11'], status: 'todo' },
    ],
  },
  {
    id: 'religion',
    title: '欧洲宗教史',
    description: '基督教塑造了欧洲的精神世界，宗教的分裂与整合贯穿始终。',
    items: [
      { id: 'rel-christ', title: '基督教的形成', relatedLessons: ['01-19'], status: 'todo' },
      { id: 'rel-catholic', title: '天主教会的发展', relatedLessons: ['02-09', '02-13'], status: 'todo' },
      { id: 'rel-orthodox', title: '东正教', relatedLessons: ['02-08', '02-09'], status: 'todo' },
      { id: 'rel-reform', title: '宗教改革', relatedLessons: ['04-02', '04-03'], status: 'todo' },
      { id: 'rel-protestant', title: '新教发展', relatedLessons: ['04-03'], status: 'todo' },
      { id: 'rel-war', title: '宗教战争', relatedLessons: ['04-09', '04-10'], status: 'todo' },
      { id: 'rel-state', title: '宗教与国家关系', relatedLessons: ['04-06'], status: 'todo' },
    ],
  },
  {
    id: 'thought',
    title: '欧洲思想史',
    description: '从苏格拉底到马克思，思想是推动欧洲历史的深层动力。',
    items: [
      { id: 'th-greek', title: '古希腊哲学', relatedLessons: ['01-03'], status: 'todo' },
      { id: 'th-rome', title: '罗马政治思想', relatedLessons: ['01-11'], status: 'todo' },
      { id: 'th-theo', title: '基督教神学', relatedLessons: ['02-20'], status: 'todo' },
      { id: 'th-human', title: '文艺复兴人文主义', relatedLessons: ['03-04'], status: 'todo' },
      { id: 'th-enlight', title: '启蒙思想', relatedLessons: ['05-06', '05-07'], status: 'todo' },
      { id: 'th-liberal', title: '自由主义', relatedLessons: ['05-07'], status: 'todo' },
      { id: 'th-conserv', title: '保守主义', relatedLessons: ['06-02'], status: 'todo' },
      { id: 'th-social', title: '社会主义', relatedLessons: ['06-09', '06-10'], status: 'todo' },
      { id: 'th-national', title: '民族主义', relatedLessons: ['06-11'], status: 'todo' },
      { id: 'th-fascist', title: '法西斯主义', relatedLessons: ['07-09', '07-10'], status: 'todo' },
    ],
  },
  {
    id: 'economy',
    title: '欧洲经济与社会史',
    description: '从奴隶制到福利国家，经济与社会结构的变化塑造了欧洲的面貌。',
    items: [
      { id: 'eco-slavery', title: '奴隶制经济', relatedLessons: ['01-12'], status: 'todo' },
      { id: 'eco-manor', title: '庄园经济', relatedLessons: ['02-11'], status: 'todo' },
      { id: 'eco-trade', title: '欧洲商业贸易', relatedLessons: ['02-18', '02-19'], status: 'todo' },
      { id: 'eco-city', title: '城市与商人阶层', relatedLessons: ['02-18'], status: 'todo' },
      { id: 'eco-commerce', title: '商业革命', relatedLessons: ['03-14'], status: 'todo' },
      { id: 'eco-industry', title: '工业革命', relatedLessons: ['06-05', '06-06'], status: 'todo' },
      { id: 'eco-capital', title: '资本主义', relatedLessons: ['03-14', '06-08'], status: 'todo' },
      { id: 'eco-labor', title: '工人运动', relatedLessons: ['06-10'], status: 'todo' },
      { id: 'eco-welfare', title: '福利国家', relatedLessons: ['08-04'], status: 'todo' },
    ],
  },
  {
    id: 'military',
    title: '欧洲军事与国际关系史',
    description: '战争是政治的延续，也是欧洲历史最剧烈的催化剂。',
    items: [
      { id: 'mil-persia', title: '希波战争', relatedLessons: ['01-07'], status: 'todo' },
      { id: 'mil-pelop', title: '伯罗奔尼撒战争', relatedLessons: ['01-08'], status: 'todo' },
      { id: 'mil-rome', title: '罗马扩张战争', relatedLessons: ['01-13'], status: 'todo' },
      { id: 'mil-crusade', title: '十字军东征', relatedLessons: ['02-17'], status: 'todo' },
      { id: 'mil-hundred', title: '百年战争', relatedLessons: ['02-22'], status: 'todo' },
      { id: 'mil-thirty', title: '三十年战争', relatedLessons: ['04-10'], status: 'todo' },
      { id: 'mil-napoleon', title: '拿破仑战争', relatedLessons: ['05-20'], status: 'todo' },
      { id: 'mil-prussia', title: '普法战争', relatedLessons: ['06-13'], status: 'todo' },
      { id: 'mil-ww1', title: '第一次世界大战', relatedLessons: ['07-02', '07-03'], status: 'todo' },
      { id: 'mil-ww2', title: '第二次世界大战', relatedLessons: ['07-13', '07-15'], status: 'todo' },
      { id: 'mil-cold', title: '冷战', relatedLessons: ['08-02'], status: 'todo' },
    ],
  },
];

export interface FigureProfile {
  id: string;
  name: string;
  /** 出生—死亡年代 */
  lifespan: string;
  /** 身份概括 */
  role: string;
  /** 相关课程 */
  relatedLessons?: string[];
  status: 'done' | 'todo';
}

export const figures: FigureProfile[] = [
  { id: 'alexander', name: '亚历山大大帝', lifespan: '前356—前323', role: '马其顿国王、征服者', relatedLessons: ['01-09'], status: 'todo' },
  { id: 'pericles', name: '伯里克利', lifespan: '约前495—前429', role: '雅典政治家', relatedLessons: ['01-05'], status: 'todo' },
  { id: 'socrates', name: '苏格拉底', lifespan: '约前470—前399', role: '古希腊哲学家', relatedLessons: ['01-03'], status: 'todo' },
  { id: 'plato', name: '柏拉图', lifespan: '约前428—前348', role: '古希腊哲学家', relatedLessons: ['01-03'], status: 'todo' },
  { id: 'aristotle', name: '亚里士多德', lifespan: '前384—前322', role: '古希腊哲学家', relatedLessons: ['01-03', '01-09'], status: 'todo' },
  { id: 'caesar', name: '凯撒', lifespan: '前100—前44', role: '罗马统帅、独裁官', relatedLessons: ['01-15'], status: 'todo' },
  { id: 'augustus', name: '奥古斯都', lifespan: '前63—14', role: '罗马帝国首任皇帝', relatedLessons: ['01-16'], status: 'todo' },
  { id: 'constantine', name: '君士坦丁大帝', lifespan: '约272—337', role: '罗马皇帝', relatedLessons: ['01-20'], status: 'todo' },
  { id: 'charlemagne', name: '查理曼', lifespan: '约742—814', role: '法兰克国王、皇帝', relatedLessons: ['02-05'], status: 'todo' },
  { id: 'william1', name: '威廉一世', lifespan: '约1028—1087', role: '诺曼底公爵、英格兰国王', relatedLessons: [], status: 'todo' },
  { id: 'frederick1', name: '腓特烈一世', lifespan: '约1122—1190', role: '神圣罗马帝国皇帝', relatedLessons: ['02-14'], status: 'todo' },
  { id: 'elizabeth1', name: '伊丽莎白一世', lifespan: '1533—1603', role: '英格兰女王', relatedLessons: ['04-04'], status: 'todo' },
  { id: 'louis14', name: '路易十四', lifespan: '1638—1715', role: '法国国王', relatedLessons: ['05-02'], status: 'todo' },
  { id: 'peter', name: '彼得大帝', lifespan: '1672—1725', role: '俄国沙皇', relatedLessons: ['05-13'], status: 'todo' },
  { id: 'napoleon', name: '拿破仑', lifespan: '1769—1821', role: '法国皇帝、军事家', relatedLessons: ['05-19', '05-20'], status: 'todo' },
  { id: 'bismarck', name: '俾斯麦', lifespan: '1815—1898', role: '普鲁士首相、德意志帝国宰相', relatedLessons: ['06-13', '06-14'], status: 'todo' },
  { id: 'marx', name: '马克思', lifespan: '1818—1883', role: '思想家、革命理论家', relatedLessons: ['06-09'], status: 'todo' },
  { id: 'lenin', name: '列宁', lifespan: '1870—1924', role: '俄国革命领袖', relatedLessons: ['07-04'], status: 'todo' },
  { id: 'churchill', name: '丘吉尔', lifespan: '1874—1965', role: '英国首相', relatedLessons: ['07-13', '07-19'], status: 'todo' },
  { id: 'degaulle', name: '戴高乐', lifespan: '1890—1970', role: '法国总统', relatedLessons: ['08-06'], status: 'todo' },
];
