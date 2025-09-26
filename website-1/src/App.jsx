// App.jsx
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

// 👇 Import ThemeProvider + ThemeToggle + useContext
import { ThemeProvider, ThemeToggle, ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'

function AppContent() {
  const { theme } = useContext(ThemeContext)  // get theme value

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black"
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      <div className="pt-[100px] flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/news" element={<News />} />
          <Route path="/client" element={<OurClients />} />
        </Routes>
      </div>

      <Footer />

      {/* Floating dark/light button */}
      <ThemeToggle />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
