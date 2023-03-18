import Styles from "../styles/Banner.module.css"

function banner( { heading, subText} ) {
    return(
        <div className={Styles["banner-wrapper"]}>
            <h2>{heading}</h2>
            <p>{subText}</p>
        </div>
    )
}

export default banner