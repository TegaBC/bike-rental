import Styles from "../styles/CompanyInfo.module.css"

export default function() {
    return (
        <div className={Styles["info-panel"]}>
            <img src="/assets/shop.jpg" alt="" />
            <div className={Styles.right}>
                <h1>You're <span>one</span> step away from the trails.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptates praesentium? Eveniet dolore aspernatur veritatis 
                    exercitationem atque aliquid est ipsam? Voluptatibus repudiandae consequuntur, deserunt placeat nostrum vero quas repellendus assumenda, 
                    aliquid saepe hic mollitia labore molestias sit cum accusantium quae distinctio nesciunt necessitatibus. Eos vel earum delectus ut aliquid quia.</p>
                
            </div>
        </div>
    )
}