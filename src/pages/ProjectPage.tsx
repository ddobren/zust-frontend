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
        <h2 className="section-title">O projektu</h2>
        <article className="intro-card">
          Znamenite žene u svijetu tehnologije školski je projekt koji kroz digitalne priče povezuje kreativnost i tehnologiju
          u STEAM pristupu (Science, Technology, Engineering, Arts, Mathematics). “A” obuhvaća dizajn, ilustraciju, vizualno
          pripovijedanje i komunikaciju, dok tehnološki dio uključuje web, digitalne alate i rješavanje problema. Projekt je
          nastao kao spoj struke web dizajna i želje da učenici rade na sadržajima koji imaju stvarnu vrijednost izvan
          učionice.
        </article>

        <section className="card-grid">
          <article className="card">
            <span className="card__eyebrow">STEAM</span>
            <h3 className="card__title">Kreativnost + tehnologija</h3>
            <p className="card__description">
              Učenici istražuju žene koje su oblikovale razvoj tehnologije, spajajući dizajn i kôd u jedinstvenom STEAM
              procesu. Fokus je na vidljivosti doprinosa koje javnost često zanemaruje.
            </p>
          </article>

          <article className="card">
            <span className="card__eyebrow">Proces</span>
            <h3 className="card__title">Istraživanje do objave</h3>
            <p className="card__description">
              Radimo cijeli kreativno-tehnološki ciklus: istraživanje i odabir izvora, pisanje scenarija, oblikovanje
              vizualnog identiteta, izrada digitalnih materijala i objava. Učenici razvijaju grafiku, web dizajn, pripremu
              sadržaja, timski rad i jasno prenošenje ideja.
            </p>
          </article>

          <article className="card">
            <span className="card__eyebrow">Dugoročno</span>
            <h3 className="card__title">Platforma koja raste</h3>
            <p className="card__description">
              Svaka generacija nastavlja tamo gdje je prethodna stala: nadograđuje sadržaje, širi teme i podiže razinu
              digitalne izvedbe. Plan je postupno uvoditi više animacije i interaktivnih elemenata te objavljivati dodatne
              članke i zanimljivosti.
            </p>
          </article>
        </section>

        <h2 className="section-title">Aktualni rad</h2>
        <section className="card-grid">
          <article className="card">
            <span className="card__eyebrow">Trenutno objavljeno</span>
            <h3 className="card__title">Digitalna slikovnica: Hedy Lamarr</h3>
            <p className="card__description">
              Prva verzija je dostupna u obliku listanja i otvara teme sigurnog komuniciranja, inovacija i građanske
              odgovornosti kroz priču o frekvencijskom skakanju.
            </p>
          </article>

          <article className="card">
            <span className="card__eyebrow">U izradi</span>
            <h3 className="card__title">Nova slikovnica: Ada Lovelace</h3>
            <p className="card__description">
              Sljedeći korak je slikovnica o Adi Lovelace, s planiranim proširenjima za animacije i interaktivne elemente koje
              će dodavati buduće generacije učenika.
            </p>
          </article>
        </section>

        <h2 className="section-title">Zašto to radimo</h2>
        <article className="list-group">
          <ul>
            <li>
              <strong>Osnaživanje djevojaka:</strong> kroz vidljive uzore i konkretan rad na digitalnim projektima gradimo
              samopouzdanje i realnu sliku o karijeri u tehnologiji i kreativnim industrijama.
            </li>
            <li>
              <strong>Međupredmetno učenje:</strong> prirodno se naslanjamo na Građanski odgoj, Poduzetništvo i primjenu IKT-a
              te suradnju s lokalnom zajednicom, školama, udrugama i partnerima.
            </li>
          </ul>
        </article>

        <article className="intro-card">
          Projekt su podržali i financirali Ministarstvo znanosti i obrazovanja te Dubrovačko-neretvanska županija.
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

export default ProjectPage
