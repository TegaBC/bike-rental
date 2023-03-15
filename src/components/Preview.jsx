import { useState } from "react"
import Styles from "../styles/Preview.module.css"


function Preview ({ bikes }) {
    const [bike, setBike] = useState(bikes[0])

    return (
        <div className={Styles.preview}>
            <div className={Styles.heading}>
                <h3>Bike Models</h3>
                <h1>Explore our fleet</h1>
                <p>Choose from a variety of different bike models, from hard tails to full suspension, we have it all.</p>
            </div>
            <div className={Styles.main}>
                <div className={Styles.buttons}>

                {bikes.map(info => {
                        return (<button className={bike.name == info.name ? Styles.selected : ""} onClick={() => setBike(info)}> {info.name} </button>)
                    })}

                </div>

                <div className={Styles.bike}>
                    <img src={bike.image} alt="" />
                </div>
                <div className={Styles.info}>
                    <div className={Styles.cost}>
                        $ <span>{bike.cost}</span> fee a day
                    </div>
                    <div className={Styles["detail-grid"]}>
                        <div className={Styles["detail-label"]}>Size</div>
                        <div>{bike.size}"</div>
                        <div className={Styles["detail-label"]}>Suspension</div>
                        <div>{bike.hardtail ? "Hardtail" : "Full"}</div>
                        <div className={Styles["detail-label"]}>Beginner Friendly</div>
                        <div>{bike.beginner ? "Yes" : "No"}</div>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default Preview