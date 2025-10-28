import { createNavigateHandler } from './utils'

type PageProps = {
  onNavigate: (path: string) => void
}

function WorkshopsPage({ onNavigate }: PageProps) {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Radionice i aktivnosti</h1>
          <p>
            Modul Radionice okuplja aktivnosti koje kombiniraju kreativno razmišljanje, programiranje i građanski odgoj.
            Svaka radionica osmišljena je za darovite učenike te nudi jasne ciljeve, materijale i prijedloge evaluacije.
          </p>
        </div>
      </section>

      <main className="landing-content">
        <article className="intro-card">
          Radionice prate razvoj interaktivne slikovnice i potiču učenike da razmišljaju poput Hedy – interdisciplinarno i
          empatično. Fokus je na iskustvenom učenju: priča vodi do tehnološkog koncepta, a zatim do timskog zadatka.
          Aktivnosti se lako prilagođavaju satovima informatike, web projekata i građanskog odgoja.
        </article>

        <h2 className="section-title">Najtraženije radionice</h2>
        <section className="card-grid">
          <article className="card">
            <span className="card__eyebrow">Storytelling</span>
            <h3 className="card__title">Tajna poruka po uzoru na Hedy</h3>
            <p className="card__description">
              Učenici izrađuju šifrirne diskove i u parovima prenose poruke koje se mogu dešifrirati samo uz pravi ključ.
              Aktivnost uvodi koncept frekvencijskog skakanja.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/radionica-tajna-poruka" onClick={createNavigateHandler(onNavigate, '/post/radionica-tajna-poruka')}>
                Pogledaj detalje
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">Digitalna kompetencija</span>
            <h3 className="card__title">Sigurna mreža u školskoj zajednici</h3>
            <p className="card__description">
              Analiza stvarnih primjera digitalne sigurnosti. Učenici procjenjuju rizike i izrađuju poster o dobrim praksama
              korištenja bežične mreže.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/sigurnost-komunikacija" onClick={createNavigateHandler(onNavigate, '/post/sigurnost-komunikacija')}>
                Uđi u scenarij
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="card">
            <span className="card__eyebrow">Prezentacijske vještine</span>
            <h3 className="card__title">Pitch: Predstavi svoju STEM junakinju</h3>
            <p className="card__description">
              U skupinama se priprema kratko izlaganje o ženi iz STEM-a. Mentorice pružaju povratne informacije o nastupu i
              strukturi prezentacije.
            </p>
            <div className="card__links">
              <a className="card__cta" href="/post/stem-mentorice" onClick={createNavigateHandler(onNavigate, '/post/stem-mentorice')}>
                Upoznaj mentorice
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </article>
        </section>

        <h2 className="section-title">Preuzmi materijale</h2>
        <section className="list-group">
          <ul>
            <li>
              <strong>Plan sata</strong> – priprema s jasno definiranim ishodima učenja i zadacima za grupni rad.
            </li>
            <li>
              <strong>Radni listići</strong> – PDF i DOCX verzije koje učenici mogu ispunjavati digitalno ili na papiru.
            </li>
            <li>
              <strong>Checklista za mentore</strong> – kriteriji praćenja rada darovitih učenika i prijedlog evaluacije.
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

export default WorkshopsPage
