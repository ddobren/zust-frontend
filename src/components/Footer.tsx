type FooterProps = {
  onNavigate?: (path: string) => void
}

function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate(path)
  }

  return (
    <footer className="footer" id="kontakt">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-title">O nama</h3>
          <p>
            Ovaj blog je dio edukativnog projekta “Znamenite žene u svijetu tehnologije” koji promiče žene u svijetu
            tehnologije i njihov utjecaj. Cilj je inspirirati mlade kroz priče o pionirkama koje su oblikovale digitalni
            svijet.
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/p/Ekonomska-i-trgova%C4%8Dka-%C5%A1kola-Dubrovnik-100058136516086/"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/ekonomskaitrgovackaskola/" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h3 className="footer-title">Brzi linkovi</h3>
          <ul>
            <li>
              <a href="/" onClick={(event) => handleNavigation(event, '/')}>
                Početna
              </a>
            </li>
            <li>
              <a href="/projekt" onClick={(event) => handleNavigation(event, '/projekt')}>
                O projektu
              </a>
            </li>
            <li>
              <a href="/radionice" onClick={(event) => handleNavigation(event, '/radionice')}>
                Radionice
              </a>
            </li>
            <li>
              <a href="/partneri" onClick={(event) => handleNavigation(event, '/partneri')}>
                Partneri
              </a>
            </li>
            <li>
              <a href="/kategorije" onClick={(event) => handleNavigation(event, '/kategorije')}>
                Kategorije
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-title">Kontakt</h3>
          <p>
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
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            ured@ss-ekonomskaitrgovacka-du.skole.hr
          </p>
          <p>
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
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            020 331 620
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ekonomska i trgovačka škola Dubrovnik. Sva prava pridržana.</p>
      </div>
    </footer>
  )
}

export default Footer
import type { MouseEvent } from 'react'
