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
          <article
            className="post-card post-card--blog"
            key={post.title}
            role="button"
            tabIndex={0}
            onClick={() => onNavigate?.(post.link)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onNavigate?.(post.link)
              }
            }}
          >
            <div className="post-image">
              <img src={post.image} alt={post.alt} />
            </div>
            <div className="post-content">
              <p className="post-date">{post.date}</p>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-tags">
                <span className="post-tag">#{post.category.replace(/\s+/g, '').toLowerCase()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LatestPosts
