import "./App.css"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import TestimonialPage from "./pages/TestimonialPage"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return <>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/testimonials" element={<TestimonialPage/>}/>
    </Routes>
  </>
}

export default App
