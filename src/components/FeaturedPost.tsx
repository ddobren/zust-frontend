const featuredPost = {
  image: '/assets/posts/hedy/hedy-thumbnail.png',
  tag: 'Novo',
  category: 'Članak',
  date: '27. Ožujka 2026.',
  title: 'Hedy Lamarr: Više od filmske dive',
  excerpt:
    'Prvi objavljeni članak donosi priču o Hedy Lamarr kao filmskoj zvijezdi i inovatorici čija je ideja frekvencijskog skakanja ostavila trag u modernoj bežičnoj komunikaciji.',
  link: '/post/hedy-lamarr-vise-od-filmske-dive',
}

type FeaturedPostProps = {
  onNavigate?: (path: string) => void
}

function FeaturedPost({ onNavigate }: FeaturedPostProps) {
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
          <img src={featuredPost.image} alt="Hedy Lamarr - ilustracija naslovnice članka" />
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
