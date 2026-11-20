import { Link } from 'react-router-dom'
import { figures } from '../data/topics'
import './pages.css'
import './figures.css'

export function FiguresPage() {
  return (
    <main className="page-main">
      <section className="part-hero">
        <div className="container">
          <span className="chip">Historical Figures</span>
          <h1 className="part-hero-title">重要历史人物</h1>
          <div className="part-hero-period">透过人物理解历史的转折</div>
          <p className="part-hero-intro">
            从亚历山大大帝到戴高乐，每一位人物都是理解其时代的一把钥匙。
            人物档案以完整文章形式呈现他们的经历、目标、决策与历史影响。
          </p>
        </div>
      </section>

      <section className="figures-list">
        <div className="container">
          <div className="figures-grid">
            {figures.map((f) => (
              <Link to={`/figure/${f.id}`} className="figure-card" key={f.id}>
                <div className="figure-name">{f.name}</div>
                <div className="figure-lifespan">{f.lifespan}</div>
                <div className="figure-role">{f.role}</div>
                <div className="figure-links">
                  <span className="figure-link">阅读档案 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
