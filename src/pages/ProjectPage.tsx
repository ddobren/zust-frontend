import { createNavigateHandler } from './utils'

type PageProps = {
  onNavigate: (path: string) => void
}

function ProjectPage({ onNavigate }: PageProps) {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Projekt “Znamenite žene u tehnologiji”</h1>
          <p>
            Povezujemo programiranje, ilustraciju i građanski odgoj kroz seriju interaktivnih slikovnica posvećenih Hedy
            Lamarr i drugim vizionarkama. Projekt nastaje u sklopu smjera Web dizajner i uključuje darovite učenike u
            stvaranje javno dostupnih edukativnih resursa.
          </p>
        </div>
      </section>

      <main className="landing-content">
        <article className="intro-card">
          Projekt je zamišljen kao višegodišnja platforma koja svake godine obrađuje novu inspirativnu priču o ženama u
          tehnologiji. Uz digitalnu slikovnicu nastaju radionice, scenariji nastavnih satova te materijali za promociju
          ravnopravnosti spolova i interesa za STEM područja. Hedy Lamarr je prva junakinja – njezin patent frekvencijskog
          skakanja otvara teme sigurnog komuniciranja, inovacija i građanske odgovornosti.
        </article>

        {/*<h2 className="section-title">Ciljevi i rezultati</h2>
        <section className="card-grid">
          <article className="card">
            <span className="card__eyebrow">Edukacija</span>
            <h3 className="card__title">Otkrivanje skrivenih priča</h3>
            <p className="card__description">
              Učimo o ženama čiji je doprinos često ostao u sjeni. Biografski sadržaji i interaktivne vremenske crte pokazuju
              kako kreativnost i znanost idu zajedno.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/hedy-zivotopis" onClick={createNavigateHandler(onNavigate, '/post/hedy-zivotopis')}>
                Pročitaj životopis
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">STEM &amp; IKT</span>
            <h3 className="card__title">Praktični koncepti</h3>
            <p className="card__description">
              Frekvencijsko skakanje, Bluetooth i sigurnost komunikacija prikazani su kroz infografike, mini-eksperimente i
              video materijale za nastavu.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/frekvencijsko-skakanje" onClick={createNavigateHandler(onNavigate, '/post/frekvencijsko-skakanje')}>
                Pogledaj objašnjenja
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">Učionica</span>
            <h3 className="card__title">Materijali za nastavnike</h3>
            <p className="card__description">
              Pripremljeni scenariji, listići i radionice osmišljeni su za rad s darovitim učenicima. Svaki modul spaja
              tehnološku znatiželju i građanske kompetencije.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/materijali-nastavnike" onClick={createNavigateHandler(onNavigate, '/post/materijali-nastavnike')}>
                Preuzmi materijale
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>
        </section>
        */}

        <h2 className="section-title">Faze rada</h2>
        <section className="list-group">
          <ul>
            <li>
              <strong>Istraživanje i scenarij</strong> – analiza izvora, pisanje priče i storyboarda, stvaranje sinopsisa za
              digitalnu slikovnicu.
            </li>
            <li>
              <strong>Vizualna produkcija</strong> – ilustracije, animacijski testovi i izrada grafičkog identiteta kroz
              mentoriranje učenica.
            </li>
            <li>
              <strong>Programiranje</strong> – izrada interaktivnih elemenata, UX planiranje i testiranje pristupačnosti.
            </li>
            <li>
              <strong>Objava i evaluacija</strong> – javna promocija, ankete, suradnja s lokalnom zajednicom i iteracije za
              iduću godinu.
            </li>
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

export default ProjectPage
