import { useState } from "react";
import classes from "../styles/Booking.module.css";

export default function Booking({ reservationType }) {
  const [more, setMore] = useState(true);

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
          <span className="material-icons-outlined" style={{fontSize: `1em`, marginRight: `.5em`}}>
            restaurant
          </span>
          <span>Hello World</span>
        </div>
      </div>
    </div>
  );
}
