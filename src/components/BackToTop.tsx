import { useEffect, useState } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleBackToTop = () => {
    if (typeof window === 'undefined') {
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      id="backToTop"
      className={`back-to-top${isVisible ? ' visible' : ''}`}
      aria-label="Povratak na vrh"
      type="button"
      onClick={handleBackToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  )
}

export default BackToTop
