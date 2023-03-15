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
    {name: "DiamondBack", image: "https://www.silvesterbrothers.com/images/raleigh/snc114r.jpg", hardtail: true, size: 20, beginner: false, cost: 35},
    {name: "Forme", image: "https://www.silvesterbrothers.com/images/black-rocks-ht2-blue-_product-image-1__3-2.png", hardtail: true, size: 26, beginner: true, cost: 15},
    {name: "Trek", image: "https://www.balfesbikes.co.uk/images/imageedit_1_2631292913.jpg", hardtail: true, size: 24, beginner: false, cost: 20},
    {name: "Vitus", image: "https://www.wigglestatic.com/product-media/106241389/Vitus-Escarpe-27-CRS-Mountain-Bike-2022-oryx-grey-01.jpg?w=1200&h=1200&a=7", hardtail: false, size: 28, beginner: false, cost: 25},
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