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
    {name: "DiamondBack", image: "src/images/bikes/db.jpg", hardtail: true, minSize: 15, maxSize: 20, beginner: true, cost: 20},
    {name: "Forme", image: "src/images/bikes/forme.png", hardtail: true, minSize: 15, maxSize: 22, beginner: true, cost: 25},
    {name: "Trek", image: "src/images/bikes/trek.jpg", hardtail: true, minSize: 16, maxSize: 24, beginner: false, cost: 35},
    {name: "Vitus", image: "src/images/bikes/vitus.jpg", hardtail: false, minSize: 18, maxSize: 24, beginner: false, cost: 40},
  ]

const locations = ["London", "Southend", "Margate", "Lake District", "Brighton", "Glasgow"]

function home() {

  return (
    <>
        <Navbar links={navLinks} />
        <Hero />
        <BookingForm bikes={fakeData} locations={locations}/>
        <Preview bikes={fakeData} />
    </>
  )
}

export default home