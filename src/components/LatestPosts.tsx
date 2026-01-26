import { blogPosts } from '../data/blogPosts'

type LatestPostsProps = {
  onNavigate?: (path: string) => void
}

function LatestPosts({ onNavigate }: LatestPostsProps) {
  return (
    <section className="latest-posts" id="clanci">
      <h2 className="section-title">Najnoviji članci</h2>
      <div className="posts-grid">
        {blogPosts.map((post) => (
          <article className="post-card post-card--blog" key={post.title}>
            <div className="post-image">
              <img src={post.image} alt={post.alt} />
              <span className="post-chip">{post.category}</span>
            </div>
            <div className="post-content">
              <p className="post-date">{post.date}</p>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-actions">
                <a
                  href={post.link}
                  className="read-more read-more--solid"
                  onClick={(event) => {
                    if (!onNavigate) {
                      return
                    }
                    event.preventDefault()
                    onNavigate(post.link)
                  }}
                >
                  Otvori priču
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LatestPosts
