import { useEffect, useState } from 'react'
import { Link, useParams, useLocation, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { topicGroups, figures } from '../data/topics'
import { loadLessonContent } from '../lib/content'
import './pages.css'
import './reader.css'

interface Entry {
  kind: 'topic' | 'figure'
  id: string
  title: string
  file: string
  subtitle?: string
  relatedLessons?: string[]
}

function findEntry(kind: 'topic' | 'figure', id: string): Entry | undefined {
  if (kind === 'topic') {
    for (const g of topicGroups) {
      const item = g.items.find((i) => i.id === id)
      if (item) {
        return {
          kind: 'topic',
          id: item.id,
          title: item.title,
          file: item.file,
          subtitle: g.title,
          relatedLessons: item.relatedLessons,
        }
      }
    }
    return undefined
  }
  const f = figures.find((x) => x.id === id)
  if (!f) return undefined
  return {
    kind: 'figure',
    id: f.id,
    title: f.name,
    file: f.file,
    subtitle: `${f.lifespan} · ${f.role}`,
    relatedLessons: f.relatedLessons,
  }
}

export function ArticlePage({ kind }: { kind: 'topic' | 'figure' }) {
  const { id } = useParams()
  const location = useLocation()
  const entry = id ? findEntry(kind, id) : undefined

  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('reader-dark')
    if (saved) setDark(saved === '1')
  }, [])

  useEffect(() => {
    if (!entry) return
    let alive = true
    setLoading(true)
    loadLessonContent(entry.file).then((text) => {
      if (!alive) return
      setContent(text)
      setLoading(false)
    })
    return () => {
      alive = false
    }
  }, [entry, location.key])

  const toggleDark = () => {
    setDark((d) => {
      localStorage.setItem('reader-dark', d ? '0' : '1')
      return !d
    })
  }

  if (!entry) {
    return <Navigate to={kind === 'topic' ? '/topics' : '/figures'} replace />
  }

  return (
    <main className={`reader${dark ? ' reader-dark' : ''}`}>
      <div className="reader-topbar">
        <div className="container reader-topbar-inner">
          <nav className="reader-crumb">
            <Link to="/">首页</Link>
            <span className="sep">/</span>
            <Link to={kind === 'topic' ? '/topics' : '/figures'}>
              {kind === 'topic' ? '历史专题' : '人物档案'}
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
          <span className="chip">{kind === 'topic' ? '历史专题' : '人物档案'}</span>
          <h1>{entry.title}</h1>
          {entry.subtitle && <div className="meta"><span>{entry.subtitle}</span></div>}
        </header>

        <div className="markdown">
          {loading ? (
            <p className="reader-loading">正在载入正文…</p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => <img src={src} alt={alt || ''} loading="lazy" />,
                a: ({ href, children }) => {
                  if (href?.startsWith('#lesson/')) {
                    const lid = href.slice('#lesson/'.length)
                    return <Link to={`/lesson/${lid}`}>{children}</Link>
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

        {entry.relatedLessons && entry.relatedLessons.length > 0 && (
          <div className="related-lessons">
            <h3>相关课程</h3>
            <ul>
              {entry.relatedLessons.map((lid) => (
                <li key={lid}>
                  <Link to={`/lesson/${lid}`}>课程 {lid}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  )
}
