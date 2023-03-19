import PageLanding from "../components/PageLanding"
import FeatureDisplay from "../components/FeatureDisplay"
import TripleHeading from "../components/TripleHeading" 
import CompanyInfo from "../components/CompanyInfo"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

const features = [{
    name:  "Huge Range", 
    info: "We offer a huge range of bikes for beginners and experts, we have the perfect bike to fit your needs",
    icon: "/assets/bike-white.png"},
    { name:  "Easy Pickup", 
      info: "We have a wide range of pickup and drop-off locations around the UK, pick the nearest one to you!",
      icon: "/assets/parcel-white.png"},
    { name:  "Friendly Staff", 
      info: "Our friendly staff team at our locations and online support will help you get out on the trails smoothly",
      icon: "/assets/group-white.png"}
  ]

function About() {
    return (
        <>
            <PageLanding name="About" />
            <CompanyInfo />
            <Banner heading="Serious Bikes, Serious Prices." subText="Order your rental today, we have unbeatable prices." />

            <TripleHeading heading="Quick & easy bike rentals" subHeading="Get on the trails soon"/>
            <FeatureDisplay features={features} heading="Quick & easy bike rentals" subHeading="Get on the trails soon"/>
            <Footer />
        </>
    )
}

export default About