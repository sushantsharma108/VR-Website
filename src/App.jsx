import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow/>
      </div>
    </>
  )
}

export default App
