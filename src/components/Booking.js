import classes from "../styles/Booking.module.css"

export default function Booking({reservationType}) {
    return (
        <div className={classes.booking}>
            <div className={classes.reservationDetails}>
                <h3>Set Your {reservationType} Now</h3>
                <p></p>
            </div>
        </div>
    )
}