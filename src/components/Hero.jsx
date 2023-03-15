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
                <img className={Styles["hero-img"]} src="https://pngimg.com/d/bicycle_PNG5391.png" alt="Mountain bike" />
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#5959FC" d="M39.8,-45.8C53.2,-44.9,67,-35.6,76.2,-21.4C85.5,-7.2,90.2,11.8,83.3,25.2C76.4,38.6,57.9,46.4,42.1,55C26.2,63.7,13.1,73.3,-0.8,74.3C-14.6,75.4,-29.3,67.9,-43.9,58.8C-58.5,49.8,-73,39.1,-78.9,24.8C-84.7,10.4,-81.7,-7.6,-76.4,-25.1C-71.1,-42.7,-63.5,-59.7,-50.3,-60.7C-37.2,-61.6,-18.6,-46.4,-2.7,-42.6C13.1,-38.9,26.3,-46.6,39.8,-45.8Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>
    )
}

export default hero