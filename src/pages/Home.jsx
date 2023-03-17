import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Preview from "../components/Preview"
import BookingForm from "../components/BookingForm"
import FeatureDisplay from "../components/FeatureDisplay"


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

const features = [{
  name:  "Huge Range", 
  info: "We offer a huge range of bikes for beginners and experts, we have the perfect bike to fit your needs",
  icon: ""},
  { name:  "Easy Pickup", 
    info: "We have a wide range of pickup and drop-off locations around the UK, pick the nearest one to you!",
    icon: ""},
  { name:  "Friendly Staff", 
    info: "Our friendly staff team at our locations and online support will help you get out on the trails smoothly",
    icon: ""}]

function home() {

  return (
    <>
        <Navbar links={navLinks} />
        <Hero />
        <BookingForm bikes={fakeData} locations={locations}/>
        <Preview bikes={fakeData} />
        <FeatureDisplay features={features} heading="Quick & easy bike rentals" subHeading="Get on the trails soon"/>
    </>
  )
}

export default home