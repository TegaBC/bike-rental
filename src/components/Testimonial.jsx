import Styles from "../styles/Testimonial.module.css"

function createCard(info) {
    return(
    <div className={Styles.card}>
        <p> "{info.testimonial}" </p>
        <div className={Styles["bottom-wrapper"]}>
            <div className={Styles["person-info"]}>
                <h1>{info.name}</h1>
                <h2>{info.location}</h2>
            </div>
            <span>
            <i class="bi bi-quote"></i>
            </span>
        </div>
    </div>)
}
function testimonial( { testimonials } ) {
    return (
        <div className={Styles.testimonials}>
            {testimonials.map(info => createCard(info))}
        </div>
    )
}

export default testimonial