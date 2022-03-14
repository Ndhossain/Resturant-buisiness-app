import logo from "../assets/nahid-logo.png";
import classes from "../styles/Logo.module.css";

export default function Logo() {
    return (
        <ul className={classes.logo}>
            <li><img src={logo} alt="Royal" /></li>
            <li><h2><a href="/">Royal Cafe &amp;<br/>Resturant</a></h2></li>
        </ul>
    )
}