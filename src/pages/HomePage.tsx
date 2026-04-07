import FeaturedPost from '../components/FeaturedPost'
import Hero from '../components/Hero'
import LatestPosts from '../components/LatestPosts'

type HomePageProps = {
  onNavigate: (path: string) => void
}

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero />

      <main className="main">
        <FeaturedPost onNavigate={onNavigate} />
        <LatestPosts onNavigate={onNavigate} />
      </main>
    </>
  )
}

export default HomePage
