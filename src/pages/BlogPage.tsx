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
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

  const filteredPosts =
    selectedCategory === 'Sve'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <h1>Blog i inspirativne priče</h1>
        </div>
      </section>

      <main className="blog-content">
        <div className="blog-filters">
          <div className="blog-filters__header">
            <p>Filtriraj prema temi:</p>
            <button
              type="button"
              className="blog-filters__toggle"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
            >
              {filtersOpen ? 'Sakrij kategorije' : 'Prikaži kategorije'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={filtersOpen ? 'rotated' : undefined}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className={`blog-filters__panel${filtersOpen ? ' open' : ''}`}>
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
      </main>
    </>
  )
}

export default BlogPage
