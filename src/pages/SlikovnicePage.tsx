import { createNavigateHandler } from './utils'

type PageProps = {
  onNavigate: (path: string) => void
}

function SlikovnicePage({ onNavigate }: PageProps) {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Interaktivne slikovnice</h1>
          <p>Biblioteka digitalnih priča koje izrađujemo kroz projekt “Znamenite žene u tehnologiji”. Nova izdanja dodajemo kako nastaju.</p>
        </div>
      </section>

      <main className="landing-content">

        <h2 className="section-title">Slikovnica: Hedy Lamarr</h2>
        <section className="list-group">
          <div className="embed-wrapper">
            <iframe
              className="embed-frame"
              src="https://hedy.ekonomska-dubrovnik.com/"
              title="Digitalna slikovnica Hedy Lamarr"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            <a href="https://hedy.ekonomska-dubrovnik.com/" target="_blank" rel="noreferrer noopener">
              https://hedy.ekonomska-dubrovnik.com/
            </a>
          </p>
        </section>

        <h2 className="section-title">Dolazeće slikovnice</h2>
        <article className="intro-card">
          U pripremi. Ovdje će se pojavljivati nove slikovnice čim budu spremne za objavu.
        </article>

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

export default SlikovnicePage
