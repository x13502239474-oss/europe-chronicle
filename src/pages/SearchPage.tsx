import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { allLessons } from '../data/catalog'
import { loadLessonContent } from '../lib/content'
import './pages.css'
import './search.css'

interface SearchResult {
  lessonId: string;
  title: string;
  partTitle: string;
  partId: string;
  snippet: string;
}

export function SearchPage() {
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''
  const [query, setQuery] = useState(q)

  useEffect(() => {
    setQuery(q)
  }, [q])

  const results = useMemo<SearchResult[]>(() => {
    const kw = query.trim()
    if (!kw) return []
    const k = kw.toLowerCase()
    const out: SearchResult[] = []
    for (const lesson of allLessons) {
      const content = loadLessonContent(lesson.file)
      const title = lesson.title
      const hayTitle = title.toLowerCase()
      const hayContent = content.toLowerCase()
      const inTitle = hayTitle.includes(k)
      const inContent = hayContent.includes(k)
      if (inTitle || inContent) {
        // 提取摘要
        let snippet = ''
        if (inContent) {
          const idx = hayContent.indexOf(k)
          const start = Math.max(0, idx - 40)
          const end = Math.min(content.length, idx + k.length + 80)
          snippet = content.slice(start, end).replace(/[#>*`\n]/g, ' ').trim()
          if (start > 0) snippet = '…' + snippet
          if (end < content.length) snippet += '…'
        } else {
          snippet = title
        }
        out.push({
          lessonId: lesson.id,
          title,
          partTitle: lesson.partTitle,
          partId: lesson.partId,
          snippet,
        })
      }
    }
    return out
  }, [query])

  return (
    <main className="page-main">
      <section className="part-hero">
        <div className="container">
          <span className="chip">Search</span>
          <h1 className="part-hero-title">站内搜索</h1>
          <div className="part-hero-period">检索课程标题与正文内容</div>
          <form
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault()
              setQuery(query.trim())
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入关键词，如：雅典、凯撒、封建制度…"
              aria-label="搜索"
            />
            <button type="submit" className="btn btn-gold">搜索</button>
          </form>
        </div>
      </section>

      <section className="search-results">
        <div className="container">
          {query.trim() && (
            <div className="search-summary">
              找到 <strong>{results.length}</strong> 条与「{query.trim()}」相关的结果
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="search-empty">没有找到相关内容，换个关键词试试。</div>
          )}

          {results.map((r) => (
            <Link to={`/lesson/${r.lessonId}`} className="search-item" key={r.lessonId}>
              <div className="search-item-title">{r.title}</div>
              <div className="search-item-part">{r.partTitle}</div>
              <div className="search-item-snippet">{r.snippet}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
