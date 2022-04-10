import classes from "../styles/Booking.module.css"

export default function Booking({reservationType}) {
    return (
        <div className={classes.booking}>
            <div className={classes.reservationDetails}>
                <h3>Set Your {reservationType} Now</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
        </div>
    )
}