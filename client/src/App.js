import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
