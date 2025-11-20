import Hero from './components/Hero';
import HelmetConfigurator from './components/HelmetConfigurator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <HelmetConfigurator />
      <Footer />
    </div>
  )
}

export default App