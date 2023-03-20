import TripleHeading from "../components/TripleHeading" 
import PageLanding from "../components/PageLanding"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"

const fauxInfo = [
    {testimonial: "We rented a bike from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.", 
    name: "Dave", location: "London, UK"},
    {testimonial: "I am a newer rider, however the staff made me feel comfortable on my rental and taught me the ropes out on the trails.", 
    name: "Thomas", location: "Margate, UK"}
  ]

export default function() {
    return(
        <>
            <PageLanding name="Testimonials" />
            <TripleHeading heading="Not convinced yet?" paragraph="View what our previous customers said about us."/>
            <Testimonial testimonials={fauxInfo}/>
            <Footer />
        </>
    )
}