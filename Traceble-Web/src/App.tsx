import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Experts from './pages/Experts'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <div className="pt-16"> {/* Add padding for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/experts" element={<Experts />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
