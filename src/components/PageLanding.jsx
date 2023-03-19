import Styles from "../styles/PageLanding.module.css"

function Landing( { name } ) {
    return (
        <div className={Styles.main}>
            <div className={Styles.wrapper}>
                <h1> {name} </h1>
                <h2> Home / {name}</h2>
            </div>
        </div>
    )
}

export default Landing