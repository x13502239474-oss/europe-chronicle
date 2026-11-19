import { Link } from 'react-router-dom'
import { parts } from '../data/catalog'
import { timeline } from '../data/timeline'
import { topicGroups, figures } from '../data/topics'
import './pages.css'
import './home.css'

export function HomePage() {
  return (
    <main className="page-main">
      {/* 主视觉 */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">欧洲文明编年史</div>
          <h1 className="hero-title">The Chronicle of Europe</h1>
          <div className="ornament">❖</div>
          <p className="hero-subtitle">从古典时代到当代，一部完整的欧洲历史</p>
          <p className="hero-desc">
            以三套权威历史著作为基础，建立从零开始、内容完整、讲解深入的欧洲历史课程。
            循着八大编的脉络，读懂欧洲政治、经济、宗教、社会、文化与思想的演变。
          </p>
          <div className="hero-cta">
            <Link to="/part/part01" className="btn btn-gold">开始学习</Link>
            <Link to="/timeline" className="btn btn-outline">查看时间轴</Link>
          </div>
        </div>
      </section>

      {/* 八大编章 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">The Eight Parts</div>
            <h2 className="section-title">八大历史编章</h2>
            <p className="section-sub">
              从史前文明到当代欧洲，八编课程层层递进，环环相扣，构成一部完整的欧洲通史。
            </p>
          </div>
          <div className="parts-grid">
            {parts.map((p) => (
              <Link to={`/part/${p.id}`} className="part-card" key={p.id}>
                <span className="part-card-num">{p.id.slice(-2)}</span>
                <div className="part-card-period">{p.subtitle}</div>
                <h3 className="part-card-title">{p.title}</h3>
                <p className="part-card-intro">{p.intro}</p>
                <div className="part-card-meta">
                  {p.lessons.length} 节课 · 进入阅读 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 时间轴预览 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Timeline</div>
            <h2 className="section-title">欧洲历史时间轴</h2>
            <p className="section-sub">从爱琴文明到英国脱欧，一条贯穿三千年历史的清晰线索。</p>
          </div>
          <div className="timeline-strip">
            {timeline.slice(0, 4).flatMap((era) =>
              era.events.slice(0, 3).map((e, i) => (
                <div className="timeline-item" key={era.id + i}>
                  <span className="timeline-dot" />
                  <span className="timeline-year">{e.year}</span>
                  <div className="timeline-body">
                    <div className="timeline-title">
                      {e.lessonId ? <Link to={`/lesson/${e.lessonId}`}>{e.title}</Link> : e.title}
                    </div>
                    <div className="timeline-desc">{e.description}</div>
                  </div>
                </div>
              )),
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/timeline" className="btn btn-outline">查看完整时间轴</Link>
          </div>
        </div>
      </section>

      {/* 专题与人物入口 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Explore</div>
            <h2 className="section-title">深入探索</h2>
            <p className="section-sub">在课程之外，通过专题资料库与人物档案，建立立体的历史认知。</p>
          </div>
          <div className="entry-row">
            <Link to="/topics" className="entry-card">
              <h3>历史知识专题</h3>
              <p>
                政治制度、宗教、思想、经济社会、军事五大专题，
                跨越编章界限，梳理欧洲历史的核心线索。
              </p>
              <span className="meta">{topicGroups.length} 大专题 · {topicGroups.reduce((n, g) => n + g.items.length, 0)} 个条目</span>
            </Link>
            <Link to="/figures" className="entry-card">
              <h3>重要历史人物</h3>
              <p>
                从亚历山大到戴高乐，透过人物档案理解历史转折中的个体抉择与时代洪流。
              </p>
              <span className="meta">{figures.length} 位人物档案</span>
            </Link>
          </div>
          <div className="entry-row" style={{ marginTop: 22 }}>
            <Link to="/maps" className="entry-card">
              <h3>历史地图</h3>
              <p>对应真实历史年代的历史地图，标注国家、政权与重要地点。</p>
              <span className="meta">覆盖从古希腊到当代的关键历史地图</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
