import Styles from "../styles/Contact.module.css"
import PageLanding from "../components/PageLanding"
import Footer from "../components/Footer"

export default function Contact () {
    return (
        <>
        <PageLanding name="Contact Us"  />
        <div className={Styles["contact-wrapper"]}>
            <div className={Styles["grid-wrapper"]}>
                <div className={Styles.left}>
                    <h1>Need more info? Contact us.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolorem impedit laudantium corporis quibusdam cumque temporibus quaerat optio, sit eaque non!</p>
                    <a><i class="bi bi-telephone-fill"></i> +44 7700 900077</a>
                    <a><i class="bi bi-envelope-fill"></i> info@bike2rent.com</a>
                    <a><i class="bi bi-geo-alt-fill"></i> London, UK</a>
                </div>
                <div className={Styles.right}>
                    <form action="">
                        <label htmlFor="">Full Name</label>
                        <input id="name" type="text" placeholder='"E.g: "John Doe"' />
                        <label htmlFor="">Email</label>
                        <input id="email" type="email" placeholder="youremail@example.com" />
                        <label htmlFor="">Your enquiry</label>
                        <textarea placeholder="Type here..."></textarea>
                        <button>Submit</button>

                    </form>
                </div>
            </div>
        </div>
       <Footer />
        </>
    )
}