type PageProps = {
  onNavigate: (path: string) => void
}

type Partner = {
  name: string
  eyebrow: string
  url: string
  description: string
  image: string
  alt: string
  imageFit?: 'cover' | 'contain'
}

const partners: Partner[] = [
  {
    name: 'AVCD',
    eyebrow: 'Audiovizualni centar Dubrovnik',
    url: 'https://www.facebook.com/avcdubrovnik/about?locale=hr_HR',
    description:
      'Udruga djeluje u socijalnom okruženju i educira djecu i mlade zainteresirane za audio i vizualne medije. Fokus je na prvim koracima produkcije te razumijevanju zvuka i slike.',
    image: '/assets/partneri/avcd-logo-1024x349.png.webp',
    alt: 'Logo Audiovizualnog centra Dubrovnik',
    imageFit: 'contain',
  },
  {
    name: 'CDMO',
    eyebrow: 'Centar za djecu, mlade i obitelj Dubrovnik',
    url: 'https://cdmodubrovnik.hr',
    description:
      'Od 1. 1. 2025. preuzima programe UO za obrazovanje, šport, socijalnu skrb i civilno društvo Grada Dubrovnika. Cjelogodišnje vodi Forum mladih, Dubrovački karneval, zimski festival te projekte s gradskim udrugama kroz civilno-javno partnerstvo.',
    image: '/assets/partneri/CDMO.jpg',
    alt: 'CDMO Dubrovnik',
  },
  {
    name: 'LUMIART',
    eyebrow: 'Međunarodni festival svjetla',
    url: 'http://www.lumiart-dubrovnik.com',
    description:
      'Festival od 2019. svakog studenog pretvara staru gradsku jezgru u trodnevnu scenu svjetlosnih instalacija, projekcija, novih medija i tehnologije.',
    image: '/assets/partneri/lumiiii.jpg',
    alt: 'Vizual festivala Lumiart',
  },
  {
    name: 'Studentski teatar Lero',
    eyebrow: 'Alternativna kazališna scena',
    url: 'http://teatarlero.hr',
    description:
      'Osnovan 1968. na inicijativu Feđe Šehovića, Lero kontinuirano djeluje u Lazaretima kao kazališni inkubator. Okuplja profesionalce, studente i amatere te gostuje na domaćim i inozemnim festivalima.',
    image: '/assets/partneri/lero-kvadrat2-1.jpg',
    alt: 'Studentski teatar Lero',
  },
]

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

        <h2 className="section-title">Naši partneri</h2>
        <section className="card-grid">
          {partners.map((partner) => (
            <article className="card" key={partner.name}>
              <img
                className={`card__image ${partner.imageFit === 'contain' ? 'card__image--contain' : ''}`}
                src={partner.image}
                alt={partner.alt}
                loading="lazy"
              />
              <span className="card__eyebrow">{partner.eyebrow}</span>
              <h3 className="card__title">{partner.name}</h3>
              <p className="card__description">{partner.description}</p>
              <div className="card__links">
                <a className="card__cta" href={partner.url} target="_blank" rel="noreferrer noopener">
                  Saznaj više
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default PartnersPage
