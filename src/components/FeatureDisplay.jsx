import Styles from "../styles/FeatureDisplay.module.css"

function displayFeature(feature) {
    const name = feature.name
    const info = feature.info
    const icon = feature.icon

    return(
        <div className={Styles.feature}>
            <img src={icon} alt="" />
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    )
}

function featureDisplay( { features } ) {
    return (
        <div className={Styles["display-wrapper"]}>
            <div className={Styles["feature-wrapper"]}>
                {features.map(feature => displayFeature(feature))}
            </div>
        </div>
    )
}

export default featureDisplay   