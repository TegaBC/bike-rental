import Styles from "../styles/TripleHeading.module.css"

function heading( { heading, subHeading, paragraph }) {
    return (
        <div className={Styles["heading"]}>
            <h3>{subHeading}</h3>
            <h1>{heading}</h1>
            <p>{paragraph}</p>
        </div>
    )
}

export default heading