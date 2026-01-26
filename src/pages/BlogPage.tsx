import { blogPosts } from '../data/blogPosts'
import { createNavigateHandler } from './utils'

type BlogPageProps = {
  onNavigate: (path: string) => void
}

function BlogPage({ onNavigate }: BlogPageProps) {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Blog i inspirativne priče</h1>
          <p>
            Najnovije lekcije iz našeg rada na slikovnici, tehnologiji i mentorstvu — bez previše formalnosti, s puno
            konkretnih primjera.
          </p>
        </div>
      </section>

      <main className="blog-content">
        <section className="blog-grid">
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
                    onClick={createNavigateHandler(onNavigate, post.link)}
                  >
                    Otvori priču
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default BlogPage
