import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Coourses from './pages/Coourses'
import ContactUs from './pages/ContactUs'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/courses" element={<Coourses/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>

       </Routes>
       <Footer/>
     
     </BrowserRouter>
    </>
  )
}

export default App
