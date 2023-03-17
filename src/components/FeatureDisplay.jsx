import Styles from "../styles/FeatureDisplay.module.css"

function displayFeature(feature) {
    const name = feature.name
    const info = feature.info
    const icon = feature.icon

    return(
        <div className={Styles.feature}>
            <div className={Styles["icon-background"]}>
                <img src={icon} alt="" />
            </div>
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    )
}

function featureDisplay( { subHeading, heading, features } ) {
    return (
        <div className={Styles["display-wrapper"]}>
            <h3>{subHeading}</h3>
            <h1>{heading}</h1>
            <div className={Styles["feature-wrapper"]}>
                {features.map(feature => displayFeature(feature))}
            </div>
        </div>
    )
}

export default featureDisplay   