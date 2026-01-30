import { useState, type FormEvent, type ChangeEvent } from 'react'

type PageProps = {
  onNavigate: (path: string) => void
}

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function ContactPage({ }: PageProps) {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialState)
  }

  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Kontakt i suradnja</h1>
          <p>Javite nam se za partnerstvo, medijsku suradnju ili razmjenu materijala. Odgovaramo u najkraćem roku.</p>
        </div>
      </section>

      <main className="landing-content">
        <article className="intro-card">
          Voljeli bismo čuti vaš prijedlog ili pitanje. Ispunite formu ili nazovite školu; rado ćemo se povezati i dogovoriti
          sljedeće korake.
        </article>

        <section className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Ime i prezime</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Vaše ime"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ime.prezime@email.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Tema poruke</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Npr. Suradnja na radionici"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Poruka</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Kako vam možemo pomoći?"
              ></textarea>
            </div>

            <button type="submit" className="hero-button contact-submit">
              Pošalji poruku
            </button>

            {submitted && <p className="form-success">Hvala! Vaša poruka je zaprimljena.</p>}
          </form>
        </section>
      </main>
    </>
  )
}

export default ContactPage
