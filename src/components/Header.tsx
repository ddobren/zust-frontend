import { useEffect, useId, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'

import logo from '../assets/logo.png'

type HeaderProps = {
  onAccessibilityToggle: () => void
  onNavigate: (path: string) => void
  currentPath: string
}

type NavLink = {
  href: string
  label: string
  external?: boolean
}

type CategoryGroup = {
  title: string
  items: Array<{ label: string; category: string; href: string }>
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Početna' },
  { href: '/projekt', label: 'O projektu' },
  { href: 'https://hedy.ekonomska-dubrovnik.com/', label: 'Slikovnica', external: true },
  { href: '/radionice', label: 'Radionice' },
  { href: '/partneri', label: 'Partneri' },
]

const categoryGroups: CategoryGroup[] = [
  {
    title: 'Hedy Lamarr',
    items: [
      { label: 'Životopis', category: 'hedy-zivotopis', href: '/post/hedy-zivotopis' },
      { label: 'Vremenska crta', category: 'hedy-timeline', href: '/post/hedy-timeline' },
      { label: 'Izdvojena priča', category: 'hedy-featured', href: '/post/hedy-featured' },
    ],
  },
  {
    title: 'Tehnološki koncepti',
    items: [
      { label: 'Frekvencijsko skakanje', category: 'frequency-hopping', href: '/post/frekvencijsko-skakanje' },
      { label: 'Bluetooth & Wi-Fi', category: 'bluetooth', href: '/post/bluetooth-wifi' },
      { label: 'Sigurnost komunikacija', category: 'sigurnost-komunikacija', href: '/post/sigurnost-komunikacija' },
    ],
  },
  {
    title: 'Za učionicu',
    items: [
      { label: 'Radionice', category: 'workshop', href: '/post/radionica-tajna-poruka' },
      { label: 'Materijali za nastavnike', category: 'teachers', href: '/post/materijali-nastavnike' },
      { label: 'Inspiracija za STEM', category: 'stem-inspiracija', href: '/post/stem-mentorice' },
    ],
  },
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
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
)

function Header({ onAccessibilityToggle, onNavigate, currentPath }: HeaderProps) {
  const dropdownButtonId = useId()
  const dropdownMenuId = `${dropdownButtonId}-menu`
  const dropdownSearchId = `${dropdownButtonId}-search`

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const dropdownRef = useRef<HTMLLIElement | null>(null)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = isMobileNavOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileNavOpen])

  useEffect(() => {
    if (!isDropdownOpen || typeof document === 'undefined') {
      return
    }

    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) {
        return
      }

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false)
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [isDropdownOpen])

  useEffect(() => {
    if (isDropdownOpen) {
      searchInputRef.current?.focus()
    } else {
      setSearchTerm('')
    }
  }, [isDropdownOpen])

  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredGroups = useMemo(() => {
    if (!normalizedSearch) {
      return categoryGroups
    }

    return categoryGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.label.toLowerCase().includes(normalizedSearch)),
      }))
      .filter((group) => group.items.length > 0)
  }, [normalizedSearch])

  const handleDropdownToggle = () => {
    setIsDropdownOpen((previous) => !previous)
  }

  const closeMenus = () => {
    setIsDropdownOpen(false)
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

  const handleCategoryClick = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    navigateInternal(href)
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

            <li className="nav-dropdown" ref={dropdownRef}>
              <button
                className="nav-dropdown-toggle"
                id={dropdownButtonId}
                aria-label="Kategorije"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-controls={dropdownMenuId}
                type="button"
                onClick={handleDropdownToggle}
              >
                <span>Kategorije</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dropdown-icon"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div
                className={`nav-dropdown-menu${isDropdownOpen ? ' active' : ''}`}
                id={dropdownMenuId}
                role="menu"
                aria-labelledby={dropdownButtonId}
              >
                <div className="dropdown-search">
                  <input
                    type="search"
                    id={dropdownSearchId}
                    placeholder="Pretraži kategorije..."
                    className="dropdown-search-input"
                    autoComplete="off"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    ref={searchInputRef}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="dropdown-search-icon"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className="dropdown-menu-container">
                  {filteredGroups.map((group) => (
                    <div className="dropdown-menu-column" key={group.title}>
                      <h4>{group.title}</h4>
                      {group.items.map((item) => (
                        <a
                          key={item.category}
                          href={item.href}
                          className="dropdown-category-item"
                          data-category={item.category}
                          onClick={(event) => handleCategoryClick(event, item.href)}
                          role="menuitem"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="dropdown-menu-footer">
                  <a
                    href="/kategorije"
                    className="view-all-categories"
                    onClick={(event) => handleCategoryClick(event, '/kategorije')}
                  >
                    Pogledaj sve kategorije
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div className="mobile-actions">
            <button
              className="accessibility-button"
              id="mobileAccessibilityButton"
              aria-label="Postavke pristupačnosti"
              type="button"
              onClick={handleAccessibilityClick}
            >
              {accessibilityIcon}
            </button>
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="accessibility-button"
            id="accessibilityButton"
            aria-label="Postavke pristupačnosti"
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
