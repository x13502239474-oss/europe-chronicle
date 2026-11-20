import { Link } from 'react-router-dom'
import { topicGroups } from '../data/topics'
import './pages.css'
import './topics.css'

export function TopicsPage() {
  return (
    <main className="page-main">
      <section className="part-hero">
        <div className="container">
          <span className="chip">Special Topics</span>
          <h1 className="part-hero-title">历史知识专题</h1>
          <div className="part-hero-period">跨编章的核心线索</div>
          <p className="part-hero-intro">
            五大专题跨越编章界限，从政治制度、宗教、思想、经济社会到军事与国际关系，
            帮助你建立立体的、专题化的历史认知框架。
          </p>
        </div>
      </section>

      <section className="topics-list">
        <div className="container">
          {topicGroups.map((g) => (
            <div className="topic-group" key={g.id}>
              <div className="topic-group-head">
                <h2 className="topic-group-title">{g.title}</h2>
                <p className="topic-group-desc">{g.description}</p>
              </div>
              <div className="topic-grid">
                {g.items.map((item) => (
                  <Link to={`/topic/${item.id}`} className="topic-item" key={item.id}>
                    <div className="topic-item-title">{item.title}</div>
                    <div className="topic-item-links">
                      <span className="topic-item-link">阅读专题 →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
