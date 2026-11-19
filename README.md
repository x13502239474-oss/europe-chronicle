# The Chronicle of Europe · 欧洲文明编年史

一部面向零基础学习者的欧洲历史系统性课程网站，覆盖从古典时代到当代欧洲的完整历史脉络。

## 项目定位

纯内容型历史知识学习平台，以三套权威历史著作为基础：

- **《The Western Heritage》**（Donald Kagan 等，第 12 版）—— 课程主线，约 60%
- **《Europe: A History》**（Norman Davies 诺曼·戴维斯）—— 欧洲整体通史补充，约 25%
- **《The Cambridge Medieval History Collection》**（剑桥中世纪史合集）—— 中世纪专题深化，约 15%

## 课程结构

八大编，共 160 节课：

1. 欧洲文明的起源与古典时代（史前 — 476 年）
2. 中世纪欧洲与基督教世界（476 — 1453 年）
3. 文艺复兴与地理大发现（约 1300 — 1600 年）
4. 宗教改革与近代欧洲国家体系（1517 — 1648 年）
5. 君主专制、启蒙运动与革命时代（1648 — 1815 年）
6. 十九世纪欧洲与现代国家形成（1815 — 1914 年）
7. 世界大战与欧洲秩序崩溃（1914 — 1945 年）
8. 战后欧洲与当代欧洲（1945 年至今）

## 技术栈

- React 19 + TypeScript + Vite
- React Router 路由
- React Markdown 内容渲染（内容与界面分离）
- 17 幅手绘 SVG 历史地图
- 站内全文搜索
- 深色阅读模式
- 手机端优先的响应式设计

## 本地开发

```bash
npm install
npm run dev
```

## 构建与部署

```bash
npm run build      # 构建到 dist/
npm run deploy     # 构建并部署到 GitHub Pages
```

## 课程内容维护

课程正文以 Markdown 文件存储于 `src/content/` 目录，与界面组件完全分离。

- 每节课一个 `.md` 文件，命名如 `01-05.md`
- 课程目录（标题、类型、文件路径）维护在 `src/data/catalog.ts`
- 时间轴数据在 `src/data/timeline.ts`
- 专题与人物档案目录在 `src/data/topics.ts`
- 历史地图清单在 `src/data/maps.ts`
