import { useState } from "react";
import classes from "../styles/Booking.module.css";
import BookingForm from "./BookingForm";

export default function Booking({ reservationType }) {
  const [more, setMore] = useState(true);
  const [location, setLocation] = useState("Indoor");
  const [partySize, setPartySize] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(``);
  const [reserverName, setReserverName] = useState(``);
  const [reserverEmail, setReserverEmail] = useState(``);

  const handleClick = () => {
    setMore(!more);
  };

  return (
    <div className={classes.booking}>
      <div className={classes.reservationDetails}>
        <h3>Set Your {reservationType} Now</h3>
        <br />
        <span>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </span>
        {more ? (
          <span
            onClick={handleClick}
            style={{ color: `#b17d04`, cursor: `pointer` }}
          >
            More+
          </span>
        ) : (
          <span style={{ marginTop: `24px` }}>
            <br />
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </span>
        )}
        <div className={classes.iconWith}>
          {reservationType !== "Event Reservation" && (
            <>
              <span
                className="material-icons-outlined"
                style={{
                  fontSize: `1em`,
                  marginRight: `.5em`,
                  fontWeight: `100`,
                }}
              >
                restaurant
              </span>
              <span>
                Reservation for parties of 1 to {location === `Indoor` ? 10 : 4}
              </span>
            </>
          )}
        </div>
        <div className={classes.iconWith}>
          <span
            className="material-icons-outlined"
            style={{ fontSize: `1em`, marginRight: `.5em`, fontWeight: `100` }}
          >
            payments
          </span>
          <span>{reservationType === "Event Reservation" ? '$100 deposit for a token' : '$20 deposit per person'}</span>
        </div>
        <div className={classes.iconWith}>
          <span
            className="material-icons-outlined"
            style={{ fontSize: `1em`, marginRight: `.5em`, fontWeight: `100` }}
          >
            receipt
          </span>
          <span>{reservationType === "Event Reservation" ? '$10 Processing Fee' : '$2 Processing Fee'}</span>
        </div>
      </div>
      <BookingForm
        location={location}
        setLocation={setLocation}
        partySize={partySize}
        setPartySize={setPartySize}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        reservationType={reservationType}
        reserverName={reserverName}
        setReserverName={setReserverName}
        reserverEmail={reserverEmail}
        setReserverEmail={setReserverEmail}
      />
    </div>
  );
}
