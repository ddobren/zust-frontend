import { createNavigateHandler } from './utils'

type PageProps = {
  onNavigate: (path: string) => void
}

function CategoriesPage({ onNavigate }: PageProps) {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Kategorije projekta</h1>
          <p>
            Odaberite temu koja vas zanima i uronite u članke, radionice i materijale kreirane za interaktivnu slikovnicu o
            Hedy Lamarr. Ovdje je zbrojeno sve što su naši učenici pripremili.
          </p>
        </div>
      </section>

      <main className="landing-content">
        <section className="card-grid">
          <article className="card">
            <span className="card__eyebrow">Biografija</span>
            <h3 className="card__title">Hedy Lamarr</h3>
            <p className="card__description">
              Biografske priče, vremenska crta i izdvojeni trenuci iz života Hedy Lamarr. Savršeno za uvod u slikovnicu i
              povezivanje s učenicima.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/hedy-zivotopis" onClick={createNavigateHandler(onNavigate, '/post/hedy-zivotopis')}>
                Biografija i životopis
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a className="card__cta" href="/post/hedy-timeline" onClick={createNavigateHandler(onNavigate, '/post/hedy-timeline')}>
                Vremenska crta
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a className="card__cta" href="/post/hedy-featured" onClick={createNavigateHandler(onNavigate, '/post/hedy-featured')}>
                Izdvojena priča
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">Tehnologija</span>
            <h3 className="card__title">Tehnološki koncepti</h3>
            <p className="card__description">
              Objašnjenja frekvencijskog skakanja, Bluetooth i Wi-Fi tehnologija te tema sigurnosti komunikacija putem
              stvarnih primjera i infografika.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/frekvencijsko-skakanje" onClick={createNavigateHandler(onNavigate, '/post/frekvencijsko-skakanje')}>
                Frekvencijsko skakanje
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a className="card__cta" href="/post/bluetooth-wifi" onClick={createNavigateHandler(onNavigate, '/post/bluetooth-wifi')}>
                Bluetooth &amp; Wi-Fi
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a className="card__cta" href="/post/sigurnost-komunikacija" onClick={createNavigateHandler(onNavigate, '/post/sigurnost-komunikacija')}>
                Sigurnost komunikacija
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">Učionica</span>
            <h3 className="card__title">Za učionicu</h3>
            <p className="card__description">
              Radionice, gotovi nastavni listići i inspirativne priče mentorica. Resursi koji pomažu u poticanju darovitih
              učenika i učenica.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/radionica-tajna-poruka" onClick={createNavigateHandler(onNavigate, '/post/radionica-tajna-poruka')}>
                Radionice
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a className="card__cta" href="/post/materijali-nastavnike" onClick={createNavigateHandler(onNavigate, '/post/materijali-nastavnike')}>
                Materijali za nastavnike
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a className="card__cta" href="/post/stem-mentorice" onClick={createNavigateHandler(onNavigate, '/post/stem-mentorice')}>
                Inspiracija za STEM
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>
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

export default CategoriesPage
