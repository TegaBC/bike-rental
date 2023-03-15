import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Preview from "../components/Preview"

const navLinks = [
  {linkName: "Home", link: "#"},
  {linkName: "About", link: "#"},
  {linkName: "Bike Models", link: "#"},
  {linkName: "Testimonals", link: "#"},
  {linkName: "Our Team", link: "#"},
  {linkName: "Contact", link: "#"}
]

const fakeData = [
    {name: "Diamondback", image: "src/images/bikes/db.png", hardtail: false, size: 20, xp: 3, cost: 35},
    {name: "Jaguar", image: "src/images/bikes/jaguar.png", hardtail: true, size: 20, xp: 1, cost: 15},
    {name: "Whyte", image: "src/images/bikes/whyte.png", hardtail: true, size: 20, xp: 2, cost: 20},
]

function home() {

  return (
    <>
        <Navbar links={navLinks} />
        <Hero />
        <Preview bikes={fakeData} />
    </>
  )
}

export default home