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
          <article className="post-card" key={post.title}>
            <div className="post-image">
              <img src={post.image} alt={post.alt} />
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <a
                href={post.link}
                className="read-more"
                onClick={(event) => {
                  if (!onNavigate) {
                    return
                  }
                  event.preventDefault()
                  onNavigate(post.link)
                }}
              >
                Pročitaj više →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LatestPosts
