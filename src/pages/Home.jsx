import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Preview from "../components/Preview"
import BookingForm from "../components/BookingForm"
import FeatureDisplay from "../components/FeatureDisplay"
import Banner from "../components/Banner"
import TripleHeading from "../components/TripleHeading" 
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"

const fakeData = [
  {name: "DiamondBack", image: "src/images/bikes/db.jpg", hardtail: true, minSize: 15, maxSize: 20, beginner: true, cost: 20},
  {name: "Forme", image: "src/images/bikes/forme.png", hardtail: true, minSize: 15, maxSize: 22, beginner: true, cost: 25},
  {name: "Trek", image: "src/images/bikes/trek.jpg", hardtail: true, minSize: 16, maxSize: 24, beginner: false, cost: 35},
  {name: "Vitus", image: "src/images/bikes/vitus.jpg", hardtail: false, minSize: 18, maxSize: 24, beginner: false, cost: 40}
]

const locations = ["London", "Southend", "Margate", "Lake District", "Brighton", "Glasgow"]

const features = [{
  name:  "Huge Range", 
  info: "We offer a huge range of bikes for beginners and experts, we have the perfect bike to fit your needs",
  icon: "src/assets/bike-white.png"},
  { name:  "Easy Pickup", 
    info: "We have a wide range of pickup and drop-off locations around the UK, pick the nearest one to you!",
    icon: "src/assets/parcel-white.png"},
  { name:  "Friendly Staff", 
    info: "Our friendly staff team at our locations and online support will help you get out on the trails smoothly",
    icon: "src/assets/group-white.png"}
]

const testimonials = [
  {testimonial: "We rented a bike from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.", 
  name: "Dave", location: "London, UK"},
  {testimonial: "I am a newer rider, however the staff made me feel comfortable on my rental and taught me the ropes out on the trails.", 
  name: "Thomas", location: "Margate, UK"}
]

function home() {

  return (
    <>
        <Hero />
        <BookingForm bikes={fakeData} locations={locations}/>
        <TripleHeading heading="Explore our fleet" subHeading="Bike Models" 
        parahraph="Choose from a variety of different bike models, from hard tails to full suspension, we have it all."/>
        <Preview bikes={fakeData} />
        <Banner heading="Crush the trails on a rental!" subText="Top Bikes. Easy pickup. Open 365 days a year." />
        <TripleHeading heading="Quick & easy bike rentals" subHeading="Get on the trails soon"/>
        <FeatureDisplay features={features} heading="Quick & easy bike rentals" subHeading="Get on the trails soon"/>
        <TripleHeading heading="Customer Testimonials" subHeading="See what our customers say about us" 
        parahraph="Discover the positive impact we've made on the our clients by reading through their testimonials."/>
        <Testimonial testimonials={testimonials}/>
        <Footer />
    </>
  )
}

export default home