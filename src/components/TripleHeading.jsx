import Styles from "../styles/TripleHeading.module.css"

function heading( { heading, subHeading, parahraph }) {
    return (
        <div className={Styles["heading"]}>
            <h3>{subHeading}</h3>
            <h1>{heading}</h1>
            <p>{parahraph}</p>
        </div>
    )
}

export default heading