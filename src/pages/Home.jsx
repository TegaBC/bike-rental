import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Preview from "../components/Preview"
import BookingForm from "../components/BookingForm"

const navLinks = [
  {linkName: "Home", link: "#"},
  {linkName: "About", link: "#"},
  {linkName: "Bike Models", link: "#"},
  {linkName: "Testimonals", link: "#"},
  {linkName: "Our Team", link: "#"},
  {linkName: "Contact", link: "#"}
]

const fakeData = [
    {name: "DiamondBack", image: "src/images/bikes/db.jpg", hardtail: true, size: 20, beginner: false, cost: 35},
    {name: "Forme", image: "src/images/bikes/forme.png", hardtail: true, size: 26, beginner: true, cost: 15},
    {name: "Trek", image: "src/images/bikes/trek.jpg", hardtail: true, size: 24, beginner: false, cost: 20},
    {name: "Vitus", image: "src/images/bikes/vitus.jpg", hardtail: false, size: 28, beginner: false, cost: 25},
  ]

const locations = ["London", "Southend", "Margate", "Lake District", "Brighton", "Glasgow"]

function home() {

  return (
    <>
        <Navbar links={navLinks} />
        <Hero />
        <Preview bikes={fakeData} />
        <BookingForm bikes={fakeData} locations={locations}/>
    </>
  )
}

export default home