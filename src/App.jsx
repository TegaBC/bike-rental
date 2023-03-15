import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {

  return (
    <div className="App">
        <Navbar links={[
          {linkName: "Home", link: "#"},
          {linkName: "About", link: "#"},
          {linkName: "Bike Models", link: "#"},
          {linkName: "Testimonals", link: "#"},
          {linkName: "Our Team", link: "#"},
          {linkName: "Contact", link: "#"}
        ]} />
        <Hero />
    </div>
  )
}

export default App
