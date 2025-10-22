import Header from './components/Header'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <header className="app__header">
          <h1>React Frontend</h1>
          <p>Start migrating your static pages into reusable components.</p>
        </header>
        <section className="app__content">
          {/* Replace this placeholder section with your first component. */}
        </section>
      </MainLayout>
    </>
  )
}

export default App
