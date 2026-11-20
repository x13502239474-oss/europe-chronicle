import { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getLesson, getPart } from '../data/catalog'
import { loadLessonContent, prefetchLessonContent } from '../lib/content'
import './pages.css'
import './reader.css'

export function LessonPage() {
  const { lessonId } = useParams()
  const lesson = lessonId ? getLesson(lessonId) : undefined
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // 深色阅读模式偏好持久化
    const saved = localStorage.getItem('reader-dark')
    if (saved) setDark(saved === '1')
  }, [])

  const toggleDark = () => {
    setDark((d) => {
      localStorage.setItem('reader-dark', d ? '0' : '1')
      return !d
    })
  }

  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!lesson) return
    let alive = true
    setLoading(true)
    loadLessonContent(lesson.file).then((text) => {
      if (!alive) return
      setContent(text)
      setLoading(false)
    })
    return () => {
      alive = false
    }
  }, [lesson])

  // 预取相邻课程，提升翻页体验
  useEffect(() => {
    if (!lesson) return
    const p = getPart(lesson.partId)
    if (!p) return
    const i = p.lessons.findIndex((l) => l.id === lesson.id)
    if (i > 0) prefetchLessonContent(p.lessons[i - 1].file)
    if (i >= 0 && i < p.lessons.length - 1) prefetchLessonContent(p.lessons[i + 1].file)
  }, [lesson])

  if (!lesson) {
    return <Navigate to="/" replace />
  }

  const part = getPart(lesson.partId)
  const partIdx = part ? part.lessons.findIndex((l) => l.id === lesson.id) : -1
  const prev = part && partIdx > 0 ? part.lessons[partIdx - 1] : undefined
  const next = part && partIdx >= 0 && partIdx < part.lessons.length - 1 ? part.lessons[partIdx + 1] : undefined

  const numMap = ['一', '二', '三', '四', '五', '六', '七', '八']

  return (
    <main className={`reader${dark ? ' reader-dark' : ''}`}>
      <div className="reader-topbar">
        <div className="container reader-topbar-inner">
          <nav className="reader-crumb">
            <Link to="/">首页</Link>
            <span className="sep">/</span>
            <Link to={`/part/${lesson.partId}`}>
              {part ? part.title.replace(/^第[一二三四五六七八]编\s*/, '') : ''}
            </Link>
          </nav>
          <div className="reader-actions">
            <button
              className="icon-btn"
              onClick={toggleDark}
              aria-label={dark ? '切换到浅色阅读模式' : '切换到深色阅读模式'}
              title={dark ? '浅色模式' : '深色模式'}
            >
              {dark ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <article className="reader-body">
        <header className="lesson-head">
          <span className="chip">
            {part ? `第${numMap[Number(part.id.slice(-2)) - 1]}编` : ''} · 第 {partIdx + 1} 课
          </span>
          <h1>{lesson.title}</h1>
          <div className="meta">
            {lesson.period && <span>{lesson.period}</span>}
            <span>类型：{lesson.type}</span>
          </div>
        </header>

        <div className="markdown">
          {loading ? (
            <div className="reader-skeleton" role="status" aria-label="正在载入正文">
              <span className="sk-line w70" />
              <span className="sk-line w100" />
              <span className="sk-line w95" />
              <span className="sk-line w100" />
              <span className="sk-line w88" />
              <span className="sk-line w100" />
              <span className="sk-line w60" />
              <span className="reader-loading">正在载入正文…</span>
            </div>
          ) : (
            <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // 图片：加注说明由 markdown 内的 caption 段落承载
              img: ({ src, alt }) => (
                <img src={src} alt={alt || ''} loading="lazy" decoding="async" />
              ),
              a: ({ href, children }) => {
                // 站内课程引用 #lesson/01-05 形式
                if (href?.startsWith('#lesson/')) {
                  const id = href.slice('#lesson/'.length)
                  return <Link to={`/lesson/${id}`}>{children}</Link>
                }
                return (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
          )}
        </div>
      </article>

      <nav className="lesson-nav">
        {prev ? (
          <Link to={`/lesson/${prev.id}`}>
            <span className="dir">← 上一课</span>
            <span className="ttl">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/lesson/${next.id}`} className="next">
            <span className="dir">下一课 →</span>
            <span className="ttl">{next.title}</span>
          </Link>
        )}
      </nav>
    </main>
  )
}
