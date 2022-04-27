import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/AdminNavMenu.module.css";

export default function AdminNavMenu() {
  const [activeMenu, setActiveMenu] = useState(``);

  const setActive = (e) => {
    setActiveMenu(e.target.innerText);
  };

  return (
    <div className={classes.sidebar}>
      <h1>Royal cafe &amp; Resturant</h1>
      <ul className={classes.menu}>
        <li>
          <Link
            onClick={setActive}
            className={activeMenu === "Dashboard" ? classes.active : null}
            to=""
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            onClick={setActive}
            className={activeMenu === "Gallery" ? classes.active : null}
            to="gallery"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            onClick={setActive}
            className={activeMenu === "Review" ? classes.active : null}
            to="review"
          >
            Review
          </Link>
        </li>
        <li>
          <Link
            onClick={setActive}
            className={activeMenu === "Message" ? classes.active : null}
            to="message"
          >
            Message
          </Link>
        </li>
        <li style={{ border: `none` }}>
          <Link
            onClick={setActive}
            className={activeMenu === "Reservation" ? classes.active : null}
            to="reservation"
          >
            Reservation
          </Link>
        </li>
      </ul>
      <div>
        <span className="material-icons-outlined">admin_panel_settings</span>
        <span className="material-icons-outlined">account_circle</span>
      </div>
    </div>
  );
}
