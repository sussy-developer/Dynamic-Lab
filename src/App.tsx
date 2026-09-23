import './App.css'
import Nav from './pages/Landing/components/NavigationBar/Nav';
import Hero from './pages/Landing/components/Hero/Hero';

function App() {
  return (
    <>
      <Nav />
      <main className="app-container">
        <Hero />
      </main>
    </>
  )
}

export default App
