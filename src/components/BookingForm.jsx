import Styles from "../styles/BookingForm.module.css"


const BookingForm = function( { bikes, locations } ) {
    return (
        <div className={Styles.wrapper}> 
            <h1>Book a bike</h1>
            <form action="" method="post">
                <div className={Styles["form-entry"]}>
                    <label htmlFor="">Model</label>
                    <select name="model" id="">
                        {bikes.map(bike => <option>{bike.name}</option>)}
                    </select> 
                </div>

                <div className={Styles["form-entry"]}>
                    <label htmlFor="">Pickup Location</label>
                    <select name="pickup-location" id="">
                        {locations.map(location => <option>{location}</option>)}
                    </select> 
                </div>

                <div className={Styles["form-entry"]}>
                    <label htmlFor="">Drop-off Location</label>
                    <select name="dropoff-location" id="">
                        {locations.map(location => <option>{location}</option>)}
                    </select> 
                </div>

                <div className={Styles["form-entry"]}>
                    <label htmlFor="">Pickup Date</label>
                    <input type="date" id="pickup-date" />
                </div>

                <div className={Styles["form-entry"]}>
                    <label htmlFor="">Drop-off Date</label>
                    <input type="date" id="dropoff-date" />
                </div>
                
                <div className={Styles["form-entry-button"]}>
                    <button className={Styles["submit"]} type="submit">Search</button>
                </div>
            </form>

        </div>
    )
}

export default BookingForm