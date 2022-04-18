import { useEffect, useState } from "react";
import classes from "../../styles/Reservation.module.css";
import Booking from "../Booking";

export default function Reservation() {
  const [menuActivation, setMenuActivation] = useState("Custom Reservation");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleClick = (e) => {
    setMenuActivation(e.target.innerText);
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className={classes.reservationHeader}></div>
      <h1 className={classes.breadCrumb}>Reservation</h1>
      <div className={classes.gape}></div>
      <div className={classes.reservation}>
        <div className={classes.mainReservation}>
          <div className={classes.resHamMenu}>
            <span
            style={{cursor: `pointer`}}
              className="material-icons-outlined"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? "close" : "drag_handle"}
              
            </span>
          </div>
          {(toggleMenu || screenWidth > 610) && (
            <ul className={classes.reservationMenu}>
              <li
                onClick={handleClick}
                className={
                  menuActivation === "Custom Reservation"
                    ? classes.active
                    : null
                }
              >
                Custom Reservation
              </li>
              <li
                onClick={handleClick}
                className={
                  menuActivation === "Launch Reservation"
                    ? classes.active
                    : null
                }
              >
                Launch Reservation
              </li>
              <li
                onClick={handleClick}
                className={
                  menuActivation === "Dinner Reservation"
                    ? classes.active
                    : null
                }
              >
                Dinner Reservation
              </li>
              <li
                onClick={handleClick}
                className={
                  menuActivation === "Event Reservation" ? classes.active : null
                }
              >
                Event Reservation
              </li>
            </ul>
          )}
          <Booking reservationType={menuActivation} />
        </div>
      </div>
    </>
  );
}
