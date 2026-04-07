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
            href="/blog"
            onClick={(event) => handleAnchorNavigate(event, '/blog', onNavigate)}
          >
            {post.category}
          </a>
          <span className="article-date">{post.date}</span>
        </div>

        <h1 className="article-title">{post.title}</h1>
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

            {section.image && (
              <figure className="article-figure">
                <img src={section.image.src} alt={section.image.alt} />
                {section.image.caption && <figcaption>{section.image.caption}</figcaption>}
              </figure>
            )}

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

        {post.cta && (
          <div className="article-cta">
            <a href={post.cta.href} target="_blank" rel="noreferrer noopener">
              {post.cta.label}
            </a>
          </div>
        )}
      </article>

      {post.related.length > 0 && (
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
      )}
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
