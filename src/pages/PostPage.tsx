import type { MouseEvent } from 'react'

import { getPostBySlug, type Article } from './postData'

type PostPageProps = {
  slug: string
  onNavigate: (path: string) => void
}

const handleAnchorNavigate = (
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate: (path: string) => void,
) => {
  event.preventDefault()
  onNavigate(href)
}

function renderPost(post: Article, onNavigate: (path: string) => void) {
  return (
    <div className="article-container">
      <header className="article-header">
        <div className="article-meta">
          <a
            className="article-category"
            href={`/kategorije#${post.category.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={(event) => handleAnchorNavigate(event, '/kategorije', onNavigate)}
          >
            {post.category}
          </a>
          <span className="article-date">{post.date}</span>
        </div>

        <h1 className="article-title">{post.title}</h1>

        <div className="article-author">
          <img src={post.author.avatar} alt={post.author.name} className="article-author__avatar" />
          <div className="article-author__meta">
            <span className="article-author__name">{post.author.name}</span>
            <span className="article-author__role">{post.author.role}</span>
          </div>
          <div className="article-author__reading-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <section className="article-hero">
        <img src={post.heroImage.src} alt={post.heroImage.alt} />
      </section>

      <article className="article-body">
        <div className="article-intro">
          <p>{post.intro}</p>
        </div>

        {post.sections.map((section) => (
          <section className="article-section" id={section.id} key={section.id}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {section.infoBox && (
              <div className="info-panel">
                <h3>{section.infoBox.title}</h3>
                <ul>
                  {section.infoBox.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.quote && (
              <blockquote className="quote">
                <p>{section.quote.text}</p>
                <cite>{section.quote.author}</cite>
              </blockquote>
            )}
          </section>
        ))}

        <section className="article-conclusion" id="zakljucak">
          <h2>{post.conclusion.heading}</h2>
          {post.conclusion.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <div className="article-tags">
          <span className="article-tags__label">Oznake:</span>
          <div className="article-tags__list">
            {post.tags.map((tag) => (
              <span className="article-tag" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="related-posts">
        <h2 className="related-title">Povezani članci</h2>
        <div className="related-grid">
          {post.related.map((relatedPost) => (
            <a
              className="related-card"
              href={relatedPost.href}
              key={relatedPost.href}
              onClick={(event) => handleAnchorNavigate(event, relatedPost.href, onNavigate)}
            >
              <div className="related-image">
                <img src={relatedPost.image} alt={relatedPost.title} />
              </div>
              <div className="related-content">
                <span className="related-category">{relatedPost.category}</span>
                <h3>{relatedPost.title}</h3>
                <span className="related-date">{relatedPost.date}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

function PostPage({ slug, onNavigate }: PostPageProps) {
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <main className="landing-content">
        <section className="intro-card">
          <h1>Članak nije pronađen</h1>
          <p>Traženi sadržaj nije dostupan. Vratite se na početnu i istražite najnovije priče.</p>
          <a className="card__cta" href="/" onClick={(event) => handleAnchorNavigate(event, '/', onNavigate)}>
            Početna stranica
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </section>
      </main>
    )
  }

  return renderPost(post, onNavigate)
}

export default PostPage
