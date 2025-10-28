import { createNavigateHandler } from './utils'

type PageProps = {
  onNavigate: (path: string) => void
}

function PartnersPage({ onNavigate }: PageProps) {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Partneri i mentorstvo</h1>
          <p>
            Projekt živi kroz suradnje. Lokalni poduzetnici, tehnološke tvrtke i alumniji škole pomažu darovitim učenicima da
            razviju svoje ideje. Mentorska mreža podržava kreativni i tehnički dio slikovnice te povezuje učenike s realnim
            projektima.
          </p>
        </div>
      </section>

      <main className="landing-content">
        <article className="intro-card">
          Trenutno otvaramo novu mrežu suradnji. Tražimo partnere koji žele podijeliti iskustvo, omogućiti pristup tehnologiji
          ili pomoći u promociji ravnopravnosti u STEM-u. Javite nam se putem školskog ureda i kreirajmo plan suradnje
          prilagođen vašoj organizaciji.
        </article>

        <h2 className="section-title">Kako se uključiti</h2>
        <section className="card-grid">
          <article className="card">
            <span className="card__eyebrow">Mentorstvo</span>
            <h3 className="card__title">Postanite mentor/mentorica</h3>
            <p className="card__description">
              Održite mini predavanje, pružite povratnu informaciju na projekte ili vodite tim učenika kroz izazov iz stvarnog
              svijeta.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/stem-mentorice" onClick={createNavigateHandler(onNavigate, '/post/stem-mentorice')}>
                Pogledaj inspiraciju
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">Resursi</span>
            <h3 className="card__title">Donirajte znanje ili opremu</h3>
            <p className="card__description">
              Prostor za radionice, pristup softveru ili savjetovanje stručnjaka pomažu nam povećati opseg i kvalitetu
              aktivnosti.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/materijali-nastavnike" onClick={createNavigateHandler(onNavigate, '/post/materijali-nastavnike')}>
                Pogledaj materijale
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">Vidljivost</span>
            <h3 className="card__title">Podržite kampanju</h3>
            <p className="card__description">
              Pomozite nam širiti priče o Hedy Lamarr i drugim uzorima kroz medije, društvene mreže i događanja u zajednici.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/hedy-featured" onClick={createNavigateHandler(onNavigate, '/post/hedy-featured')}>
                Otkrij priču
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>
        </section>

        <h2 className="section-title">Koraci suradnje</h2>
        <section className="list-group">
          <ul>
            <li><strong>Uvjetni razgovor</strong> – upoznajmo se i definirajmo zajedničke ciljeve.</li>
            <li><strong>Plan aktivnosti</strong> – dogovor formata suradnje (mentorstvo, resursi, promocija).</li>
            <li><strong>Realizacija</strong> – provedba radionice, gostovanja ili stvaranje sadržaja.</li>
            <li><strong>Evaluacija</strong> – razmjena povratnih informacija i dogovor za buduće projekte.</li>
          </ul>
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

export default PartnersPage
