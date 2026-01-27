import type { MouseEvent } from 'react'

const featuredPost = {
  image: 'https://cdn.futura-sciences.com/sources/images/hedy-lamarr-wifi.jpeg',
  tag: 'Novo',
  category: 'Žene u tehnologiji',
  date: '7. Lipnja 2025.',
  title: 'Hedy Lamarr – Glumica koja je izumila temelj Bluetootha',
  excerpt:
    'Iako poznata kao hollywoodska zvijezda, Hedy Lamarr ostavila je neizbrisiv trag i u svijetu tehnologije. Sa suizumiteljem Georgeom Antheilom razvila je koncept frekvencijskog skakanja – tehnologije koja je danas osnova za Wi-Fi, Bluetooth i GPS.',
  link: '/post/hedy-featured',
}

type FeaturedPostProps = {
  onNavigate?: (path: string) => void
}

function FeaturedPost({ onNavigate }: FeaturedPostProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate(featuredPost.link)
  }

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate(featuredPost.link)
    }
  }

  return (
    <section className="featured-post" id="featured">
      <h2 className="section-title">Izdvojeni članak</h2>
      <div className="featured-card" role="button" tabIndex={0} onClick={handleCardClick} onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleCardClick()
        }
      }}>
        <div className="featured-image">
          <img src={featuredPost.image} alt="Hedy Lamarr - ikona tehnologije" />
          <div className="featured-tag">{featuredPost.tag}</div>
        </div>
        <div className="featured-content">
          <div className="post-meta">
            <span className="post-category">{featuredPost.category}</span>
            <span className="post-date">{featuredPost.date}</span>
          </div>
          <h3 className="featured-title">{featuredPost.title}</h3>
          <p className="featured-excerpt">{featuredPost.excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
