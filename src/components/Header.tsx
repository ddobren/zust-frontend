import { useEffect, useId, useState, type FocusEvent } from 'react'

import '../styles/components/header.css'

type NavLink = {
  href: string
  label: string
  isActive?: boolean
}

const navLinks: NavLink[] = [
  { href: '#', label: 'Početna', isActive: true },
  { href: 'o-nama.html', label: 'O nama' },
]

type CategoryGroup = {
  title: string
  items: Array<{ label: string; category: string }>
}

const categoryGroups: CategoryGroup[] = [
  {
    title: 'Inspiracija',
    items: [
      { label: 'Žene u tehnologiji', category: 'women-tech' },
      { label: 'Biografije', category: 'biographies' },
      { label: 'Uloge u društvu', category: 'society-roles' },
      { label: 'Poznate znanstvenice', category: 'famous-scientists' },
    ],
  },
  {
    title: 'Edukacija',
    items: [
      { label: 'STEM područja', category: 'stem' },
      { label: 'Tehnološki razvoj', category: 'tech-history' },
      { label: 'Inovacije', category: 'innovation' },
      { label: 'Interaktivno učenje', category: 'interactive-learning' },
    ],
  },
  {
    title: 'Digitalni svijet',
    items: [
      { label: 'Web i mediji', category: 'web-media' },
      { label: 'Multimedija', category: 'multimedia' },
      { label: 'Računalna grafika', category: 'graphics' },
      { label: 'Programiranje', category: 'coding' },
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

function Header() {
  const dropdownButtonId = useId()
  const dropdownMenuId = `${dropdownButtonId}-menu`
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      if (typeof document === 'undefined') {
        return
      }

      document.body.style.overflow = ''
    }
  }, [isMobileNavOpen])

  const closeDropdown = () => setIsDropdownOpen(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleDropdownBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeDropdown()
    }
  }

  const handleDropdownMouseLeave = () => {
    closeDropdown()
  }

  const handleHamburgerToggle = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  const handleNavInteraction = () => {
    setIsMobileNavOpen(false)
    closeDropdown()
  }

  return (
    <header className="header">
      <div className="header-inner">
        <nav className={`nav${isMobileNavOpen ? ' active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map(({ href, label, isActive }) => (
              <li key={label}>
                <a
                  href={href}
                  className={isActive ? 'active' : undefined}
                  onClick={handleNavInteraction}
                >
                  {label}
                </a>
              </li>
            ))}

            <li
              className="nav-dropdown"
              onBlur={handleDropdownBlur}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                type="button"
                className="nav-dropdown-toggle"
                id={dropdownButtonId}
                aria-label="Kategorije"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls={dropdownMenuId}
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
                role="menu"
                id={dropdownMenuId}
                aria-labelledby={dropdownButtonId}
              >
                <div className="dropdown-menu-container">
                  {categoryGroups.map((group) => (
                    <div className="dropdown-menu-column" key={group.title}>
                      <h4>{group.title}</h4>
                      {group.items.map((item) => (
                        <a
                          key={item.category}
                          href="#"
                          className="dropdown-category-item"
                          data-category={item.category}
                          onClick={handleNavInteraction}
                          role="menuitem"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <div className="mobile-actions">
            <button
              className="accessibility-button"
              type="button"
              aria-label="Postavke pristupačnosti"
              onClick={handleNavInteraction}
            >
              {accessibilityIcon}
            </button>
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="accessibility-button"
            type="button"
            aria-label="Postavke pristupačnosti"
          >
            {accessibilityIcon}
          </button>
        </div>

        <button
          className="hamburger"
          type="button"
          aria-label="Izbornik"
          aria-expanded={isMobileNavOpen}
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
