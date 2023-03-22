import "./App.css"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import TestimonialPage from "./pages/TestimonialPage"
import ContactPage from "./pages/Contact"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

// <Route path="/about" element={<AboutPage/>}/>

function App() {

  return <>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/testimonials" element={<TestimonialPage/>}/>
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </>
}

export default App
