import { Link } from 'react-router-dom'
import { timeline } from '../data/timeline'
import './pages.css'
import './timeline.css'

export function TimelinePage() {
  return (
    <main className="page-main">
      <section className="part-hero">
        <div className="container">
          <span className="chip">Timeline</span>
          <h1 className="part-hero-title">欧洲历史时间轴</h1>
          <div className="part-hero-period">史前 — 至今</div>
          <p className="part-hero-intro">
            按历史时期梳理欧洲的重大事件、王朝更替、战争、政治改革与制度形成。
            点击事件可跳转到对应的详细课程。
          </p>
        </div>
      </section>

      <section className="timeline-full">
        <div className="container">
          {timeline.map((era) => (
            <div className="era" key={era.id}>
              <div className="era-head">
                <h2 className="era-title">{era.name}</h2>
                <span className="era-range">{era.range}</span>
              </div>
              <div className="timeline-strip">
                {era.events.map((e, i) => (
                  <div className="timeline-item" key={i}>
                    <span className="timeline-dot" />
                    <span className="timeline-year">{e.year}</span>
                    <div className="timeline-body">
                      <div className="timeline-title">
                        {e.lessonId ? (
                          <Link to={`/lesson/${e.lessonId}`}>{e.title}</Link>
                        ) : (
                          e.title
                        )}
                      </div>
                      <div className="timeline-desc">{e.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
