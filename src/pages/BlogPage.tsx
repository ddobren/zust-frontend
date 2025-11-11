import { useMemo, useState } from 'react'

import { blogPosts } from '../data/blogPosts'
import { createNavigateHandler } from './utils'

type BlogPageProps = {
  onNavigate: (path: string) => void
}

function BlogPage({ onNavigate }: BlogPageProps) {
  const categories = useMemo(() => {
    const unique = new Set<string>()
    blogPosts.forEach((post) => unique.add(post.category))
    return ['Sve', ...Array.from(unique)]
  }, [])

  const [selectedCategory, setSelectedCategory] = useState<string>('Sve')

  const filteredPosts =
    selectedCategory === 'Sve'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Blog i inspirativne priče</h1>
          <p>
            Pregledaj sve članke projekta: biografije Hedy Lamarr, objašnjenja njezinih tehnoloških otkrića i materijale za
            radionice koje potiču zanimanje za STEM područja.
          </p>
          <div className="hero-meta">
            <span>Novosti iz projekta</span>
            <span>STEM inspiracija</span>
            <span>Radionice i materijali</span>
          </div>
        </div>
      </section>

      <main className="blog-content">
        <div className="blog-filters">
          <p>Filtriraj prema temi:</p>
          <div className="blog-filters__buttons">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={category === selectedCategory ? 'active' : undefined}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <section className="blog-grid">
          {filteredPosts.map((post) => (
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
                  onClick={createNavigateHandler(onNavigate, post.link)}
                >
                  Pročitaj više →
                </a>
              </div>
            </article>
          ))}
        </section>

        <div className="back-link">
          <a href="/kategorije" onClick={createNavigateHandler(onNavigate, '/kategorije')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Pogledaj sve kategorije
          </a>
        </div>
      </main>
    </>
  )
}

export default BlogPage
