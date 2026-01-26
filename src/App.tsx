import { useCallback, useEffect, useMemo, useState } from 'react'

import PageShell from './components/PageShell'
import CategoriesPage from './pages/CategoriesPage'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import PartnersPage from './pages/PartnersPage'
import PostPage from './pages/PostPage'
import ProjectPage from './pages/ProjectPage'
import ArchivePage from './pages/ArchivePage'
import './styles/article.css'
import './styles/landing.css'

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === 'undefined') {
      return '/'
    }
    return window.location.pathname || '/'
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const handleNavigate = useCallback((path: string) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path)
      }
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    setCurrentPath(path)
  }, [])

  const pageContent = useMemo(() => {
    if (currentPath === '/') {
      return <HomePage onNavigate={handleNavigate} />
    }

    if (currentPath === '/projekt') {
      return <ProjectPage onNavigate={handleNavigate} />
    }

    if (currentPath === '/radovi' || currentPath === '/arhiva' || currentPath === '/radionice') {
      return <ArchivePage onNavigate={handleNavigate} />
    }

    if (currentPath === '/partneri') {
      return <PartnersPage onNavigate={handleNavigate} />
    }

    if (currentPath === '/blog') {
      return <BlogPage onNavigate={handleNavigate} />
    }

    if (currentPath === '/kategorije') {
      return <CategoriesPage onNavigate={handleNavigate} />
    }

    if (currentPath.startsWith('/post/')) {
      const slug = currentPath.replace('/post/', '')
      return <PostPage slug={slug} onNavigate={handleNavigate} />
    }

    return (
      <main className="landing-content landing-content--not-found">
        <section className="intro-card intro-card--not-found">
          <h1>Stranica nije pronađena</h1>
          <p>Zatraženi sadržaj nije dostupan. Vratite se na početnu stranicu.</p>
          <a className="card__cta" href="/" onClick={(event) => { event.preventDefault(); handleNavigate('/') }}>
            Početna stranica
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </section>
      </main>
    )
  }, [currentPath, handleNavigate])

  return (
    <PageShell currentPath={currentPath} onNavigate={handleNavigate}>
      {pageContent}
    </PageShell>
  )
}

export default App
