import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
// import Contact from "./components/Contact"

function App() {
  return (
    <div className="font-sans bg-dark text-light">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Experience />
        {/* <Contact /> */}
      </main>
    </div>
  )
}

export default App
