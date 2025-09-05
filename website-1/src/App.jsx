import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Navbar from './components/Navbar'
import News from './pages/News'
import Practice from './pages/Practice'
import FAQ from './pages/FAQ'
import Footer from './components/Footer'
import OurClients from './pages/OurClients'

function App() {
  return (
    <BrowserRouter>
      {/* Fixed Navbar */}
      <Navbar />
   

      {/* Add top padding equal to navbar height for all pages */}
      <div className="pt-[100px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/news" element={<News />} />
          <Route path="/client" element={<OurClients/>}/>
        </Routes>
      </div>
  
         <Footer/>
    </BrowserRouter>
  )
}

export default App
