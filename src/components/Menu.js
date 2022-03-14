import classes from "../styles/Menu.module.css"
import buttonclasses from "../styles/SignupButton.module.css"
import Button from "./Button";

export default function Menu() {
  return (
    <>
      <div className={classes.hamBurger}>
        <h1 className="material-icons-outlined" style={{fontSize: "40px"}}>
          menu
        </h1>
      </div>
      <ul className={classes.menu}>
        <li>
          <a href="/Home.html">HOME</a>
        </li>
        <li>
          <a href="/About.html">ABOUT</a>
        </li>
        <li>
          <a href="/About.html">MENU</a>
        </li>
        <li>
          <a href="/About.html">VOUCHER</a>
        </li>
        <li>
          <a href="/About.html">CONTACTS</a>
        </li>
        <li>
          <Button classes={buttonclasses} type="LOG IN" />
          <Button classes={buttonclasses} type="SIGN UP" />
        </li>
      </ul>
    </>
  );
}
