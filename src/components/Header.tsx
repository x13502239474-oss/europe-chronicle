import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { BrandMark } from './BrandMark'

const navItems = [
  { to: '/', label: '首页', end: true },
  { to: '/timeline', label: '时间轴' },
  { to: '/maps', label: '历史地图' },
  { to: '/topics', label: '专题' },
  { to: '/figures', label: '人物' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // 路由变化时关闭抽屉
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // 抽屉打开时锁定背景滚动：iOS Safari 下 overflow:hidden 不可靠，
  // 用 fixed + top 偏移保持当前视口位置，关闭后恢复并回到原位置。
  useEffect(() => {
    if (!menuOpen) return
    const scrollY = window.scrollY
    const body = document.body
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      window.scrollTo(0, scrollY)
    }
  }, [menuOpen])

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`)
      setQuery('')
    }
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <BrandMark className="brand-mark" />
          <span>The Chronicle of Europe</span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <form className="search-box" onSubmit={submitSearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
            <input
              type="text"
              placeholder="搜索课程"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="站内搜索"
            />
          </form>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="打开菜单"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端抽屉 */}
      <div
        className={`drawer-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside className={`drawer${menuOpen ? ' open' : ''}`}>
        <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="关闭菜单">
          ✕
        </button>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </aside>
    </header>
  )
}
