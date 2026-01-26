import { createNavigateHandler } from './utils'

type PageProps = {
  onNavigate: (path: string) => void
}

function ArchivePage({ onNavigate }: PageProps) {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Arhiva radova učenika</h1>
          <p>Mjesto na kojem objavljujemo završene projekte, skice i prototipe.</p>
        </div>
      </section>

      <main className="landing-content">
        <article className="intro-card">
          Arhiva bilježi proces stvaranja radova naših učenika. Ovdje možete pratiti napredak i vidjeti kako se ideje razvijaju kroz vrijeme.
        </article>

        <h2 className="section-title">Izdvojeni radovi</h2>
        <section className="intro-card">
          <p>Uskoro...</p>
        </section>

        <div className="back-link">
          <a href="/" onClick={createNavigateHandler(onNavigate, '/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Povratak na početnu
          </a>
        </div>
      </main>
    </>
  )
}

export default ArchivePage
