import { Link, useParams, Navigate } from 'react-router-dom'
import { getPart } from '../data/catalog'
import { hasLessonContent } from '../lib/content'
import './pages.css'

export function PartPage() {
  const { partId } = useParams()
  const part = partId ? getPart(partId) : undefined

  if (!part) {
    return <Navigate to="/" replace />
  }

  const idx = Number(part.id.slice(-2))

  return (
    <main className="page-main">
      <section className="part-hero">
        <div className="container">
          <span className="chip">第{['一', '二', '三', '四', '五', '六', '七', '八'][idx - 1] ?? idx}编</span>
          <h1 className="part-hero-title">{part.title}</h1>
          <div className="part-hero-period">{part.subtitle}</div>
          <p className="part-hero-intro">{part.intro}</p>
        </div>
      </section>

      <section className="lesson-list">
        <div className="container">
          {part.lessons.map((lesson, i) => {
            const ready = hasLessonContent(lesson.file)
            return (
              <Link to={`/lesson/${lesson.id}`} className="lesson-item" key={lesson.id}>
                <span className="lesson-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="lesson-info">
                  <div className="lesson-title">{lesson.title}</div>
                  <span className="lesson-type">
                    {lesson.type}
                    {ready ? '' : ' · 待编写'}
                  </span>
                </div>
                <span className="lesson-arrow">›</span>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
