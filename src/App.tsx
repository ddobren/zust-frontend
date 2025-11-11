import { useCallback, useEffect, useMemo, useState } from 'react'

import AccessibilityPanel, { type Theme } from './components/AccessibilityPanel'
import PageShell from './components/PageShell'
import ReadingGuide from './components/ReadingGuide'
import CategoriesPage from './pages/CategoriesPage'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import PartnersPage from './pages/PartnersPage'
import PostPage from './pages/PostPage'
import ProjectPage from './pages/ProjectPage'
import WorkshopsPage from './pages/WorkshopsPage'
import './styles/article.css'
import './styles/landing.css'

const DEFAULT_FONT_SIZE = 16
const MIN_FONT_SIZE = 12
const MAX_FONT_SIZE = 24

function App() {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false)
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE)
  const [theme, setTheme] = useState<Theme>('light')
  const [dyslexiaEnabled, setDyslexiaEnabled] = useState(false)
  const [readingGuideEnabled, setReadingGuideEnabled] = useState(false)
  const [reduceAnimations, setReduceAnimations] = useState(false)
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

    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'dark' || storedTheme === 'high-contrast' || storedTheme === 'light') {
      setTheme(storedTheme)
    }

    const storedDyslexia = window.localStorage.getItem('dyslexiaMode') === 'true'
    setDyslexiaEnabled(storedDyslexia)

    const storedReadingGuide = window.localStorage.getItem('readingGuide') === 'true'
    setReadingGuideEnabled(storedReadingGuide)

    const storedReduceAnimations = window.localStorage.getItem('reduceAnimations') === 'true'
    setReduceAnimations(storedReduceAnimations)

    const storedFontSize = Number(window.localStorage.getItem('fontSize'))
    if (!Number.isNaN(storedFontSize) && storedFontSize >= MIN_FONT_SIZE && storedFontSize <= MAX_FONT_SIZE) {
      setFontSize(storedFontSize)
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.documentElement.style.fontSize = `${fontSize}px`

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('fontSize', String(fontSize))
    }
  }, [fontSize])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.classList.remove('dark-mode', 'high-contrast-mode')

    if (theme === 'dark') {
      document.body.classList.add('dark-mode')
    } else if (theme === 'high-contrast') {
      document.body.classList.add('high-contrast-mode')
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.classList.toggle('dyslexia-mode', dyslexiaEnabled)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dyslexiaMode', String(dyslexiaEnabled))
    }
  }, [dyslexiaEnabled])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('readingGuide', String(readingGuideEnabled))
    }
  }, [readingGuideEnabled])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.classList.toggle('reduce-motion', reduceAnimations)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('reduceAnimations', String(reduceAnimations))
    }
  }, [reduceAnimations])

  const handleAccessibilityToggle = () => {
    setIsAccessibilityOpen((previous) => !previous)
  }

  const handleCloseAccessibility = () => {
    setIsAccessibilityOpen(false)
  }

  const handleFontDecrease = () => {
    setFontSize((size) => Math.max(size - 2, MIN_FONT_SIZE))
  }

  const handleFontIncrease = () => {
    setFontSize((size) => Math.min(size + 2, MAX_FONT_SIZE))
  }

  const handleFontReset = () => {
    setFontSize(DEFAULT_FONT_SIZE)
  }

  const handleResetAccessibility = useCallback(() => {
    setFontSize(DEFAULT_FONT_SIZE)
    setTheme('light')
    setDyslexiaEnabled(false)
    setReadingGuideEnabled(false)
    setReduceAnimations(false)
    setIsAccessibilityOpen(false)

    if (typeof document !== 'undefined') {
      document.body.classList.remove('dark-mode', 'high-contrast-mode', 'dyslexia-mode', 'reduce-motion')
      document.documentElement.style.fontSize = `${DEFAULT_FONT_SIZE}px`
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', 'light')
      window.localStorage.removeItem('dyslexiaMode')
      window.localStorage.removeItem('readingGuide')
      window.localStorage.removeItem('reduceAnimations')
      window.localStorage.removeItem('fontSize')
    }
  }, [])

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

    if (currentPath === '/radionice') {
      return <WorkshopsPage onNavigate={handleNavigate} />
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
    <>
      <AccessibilityPanel
        isOpen={isAccessibilityOpen}
        onClose={handleCloseAccessibility}
        onFontDecrease={handleFontDecrease}
        onFontIncrease={handleFontIncrease}
        onFontReset={handleFontReset}
        theme={theme}
        onThemeChange={setTheme}
        dyslexiaEnabled={dyslexiaEnabled}
        onDyslexiaToggle={setDyslexiaEnabled}
        readingGuideEnabled={readingGuideEnabled}
        onReadingGuideToggle={setReadingGuideEnabled}
        reduceAnimations={reduceAnimations}
        onReduceAnimationsToggle={setReduceAnimations}
        onResetAccessibility={handleResetAccessibility}
      />

      <ReadingGuide isActive={readingGuideEnabled} />

      <PageShell
        currentPath={currentPath}
        onAccessibilityToggle={handleAccessibilityToggle}
        onNavigate={handleNavigate}
      >
        {pageContent}
      </PageShell>
    </>
  )
}

export default App
