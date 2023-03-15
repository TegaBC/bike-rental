import Styles from "../styles/Hero.module.css"

function hero() {
    
    return (
        <div className={Styles.hero}>
            <div className={Styles.left}> 
                <h4>Rent your bike</h4>
                <h1>Ride the <span>trails</span> on our rentals</h1>
                <p>Rent your dream bike today. Solid prices, a large range of sizes, flexible pick up options and much more.</p>
                <div className={Styles["button-wrapper"]}>
                    <a id={Styles["rent-btn"]}>
                        Rent a bike
                        <i class="bi bi-check-circle-fill"></i>
                    </a>
                    <a id={Styles["learn-btn"]}>
                        Learn more
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className={Styles.right}>
                <img className={Styles["hero-img"]} src="src/images/hero/heroimg.png" alt="Mountain bike" />
            </div>
        </div>
    )
}

export default hero