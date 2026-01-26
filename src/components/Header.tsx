import { useEffect, useState, type MouseEvent as ReactMouseEvent } from 'react'

import logo from '../assets/logo.png'

type HeaderProps = {
  onNavigate: (path: string) => void
  currentPath: string
}

type NavLink = {
  href: string
  label: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Početna' },
  { href: '/projekt', label: 'O projektu' },
  { href: '/radovi', label: 'Arhiva radova' },
  { href: '/partneri', label: 'Partneri' },
  { href: '/blog', label: 'Blog' },
]

function Header({ onNavigate, currentPath }: HeaderProps) {
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
            <div className="header-logo__text" aria-hidden="true">
              <span className="header-logo__title">Znamenite žene</span>
              <span className="header-logo__subtitle">u svijetu tehnologije</span>
            </div>
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
        </nav>

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
