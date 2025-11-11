import { useEffect, useState, type MouseEvent as ReactMouseEvent } from 'react'

import logo from '../assets/logo.png'

type HeaderProps = {
  onAccessibilityToggle: () => void
  onNavigate: (path: string) => void
  currentPath: string
  isAccessibilityActive: boolean
}

type NavLink = {
  href: string
  label: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Početna' },
  { href: '/projekt', label: 'O projektu' },
  { href: '/radionice', label: 'Radionice' },
  { href: '/partneri', label: 'Partneri' },
  { href: '/blog', label: 'Blog' },
]

const accessibilityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="7" r="3" />
    <path d="M5 21l2-8 5-2 5 2 2 8" />
    <path d="M9 21v-5a3 3 0 0 1 6 0v5" />
  </svg>
)

function Header({ onAccessibilityToggle, onNavigate, currentPath, isAccessibilityActive }: HeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = isMobileNavOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileNavOpen])

  const closeMenus = () => {
    setIsMobileNavOpen(false)
  }

  const navigateInternal = (path: string) => {
    onNavigate(path)
  }

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return currentPath === '/'
    }

    return currentPath.startsWith(href)
  }

  const handleNavLinkClick = (event: ReactMouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (!external) {
      event.preventDefault()
      navigateInternal(href)
    }

    closeMenus()
  }

  const handleHamburgerToggle = () => {
    setIsMobileNavOpen((previous) => !previous)
  }

  const handleAccessibilityClick = () => {
    onAccessibilityToggle()
    closeMenus()
  }

  const handleBrandClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigateInternal('/')
    closeMenus()
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <a href="/" className="header-logo" onClick={handleBrandClick} aria-label="Početna">
            <img src={logo} alt="Znamenite žene logo" className="header-logo__image" />
          </a>
        </div>
        <nav className={`nav${isMobileNavOpen ? ' active' : ''}`} id="mainNav">
          <ul className="nav-links">
            {navLinks.map(({ href, label, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className={isActiveLink(href) ? 'active' : undefined}
                  onClick={(event) => handleNavLinkClick(event, href, external)}
                  rel={external ? 'noopener noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
          <button
            className={`accessibility-button${isAccessibilityActive ? ' active' : ''}`}
            id="mobileAccessibilityButton"
            aria-label="Postavke pristupačnosti"
            aria-pressed={isAccessibilityActive}
            type="button"
            onClick={handleAccessibilityClick}
          >
            {accessibilityIcon}
          </button>
        </div>
        </nav>

        <div className="header-actions">
          <button
            className={`accessibility-button${isAccessibilityActive ? ' active' : ''}`}
            id="accessibilityButton"
            aria-label="Postavke pristupačnosti"
            aria-pressed={isAccessibilityActive}
            type="button"
            onClick={handleAccessibilityClick}
          >
            {accessibilityIcon}
          </button>
        </div>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Izbornik"
          aria-expanded={isMobileNavOpen}
          type="button"
          onClick={handleHamburgerToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
