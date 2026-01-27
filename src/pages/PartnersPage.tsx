type PageProps = {
  onNavigate: (path: string) => void
}

function PartnersPage({ }: PageProps) {
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
      </main>
    </>
  )
}

export default PartnersPage
