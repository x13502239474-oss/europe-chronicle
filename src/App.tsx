import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { PartPage } from './pages/PartPage'
import { LessonPage } from './pages/LessonPage'
import { TopicsPage } from './pages/TopicsPage'
import { FiguresPage } from './pages/FiguresPage'
import { TimelinePage } from './pages/TimelinePage'
import { MapsPage } from './pages/MapsPage'
import { SearchPage } from './pages/SearchPage'
import { ScrollToTop } from './components/ScrollToTop'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.style.colorScheme = 'light'
  }, [])

  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/part/:partId" element={<PartPage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/figures" element={<FiguresPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <ScrollToTop key={location.pathname} />
    </div>
  )
}
