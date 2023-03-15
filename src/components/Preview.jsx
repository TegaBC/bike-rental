import { useState } from "react"
import Styles from "../styles/Preview.module.css"


function Preview ({ bikes }) {
    const [bike, setBike] = useState(bikes[0])

    return (
        <div className={Styles.preview}>
            <div className={Styles.heading}>
                <h3>Bike Models</h3>
                <h1>Our rental fleet</h1>
                <p>Choose from a variety of different bike models, from hard tails to full suspension, we have it all.</p>
            </div>
            <div className={Styles.main}>
                <div className={Styles.buttons}>

                {bikes.map(info => {
                        return (<button className={bike.name == info.name ? Styles.selected : ""} onClick={() => setBike(info)}> {info.name} </button>)
                    })}

                </div>

                <img className={Styles.bike} src={bike.image} alt="" />
                <div className={Styles.info}>
                    <div className={Styles.cost}>
                        ${bike.cost} fee a day
                    </div>
                    <div className={Styles["detail-grid"]}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview