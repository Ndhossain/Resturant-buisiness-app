import logo from "../assets/nahid-logo.png";
import classes from "../styles/Logo.module.css";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <ul className={classes.logo}>
            <li><Link to={'/'}><img src={logo} alt="Royal" /></Link></li>
            <li><h2><Link to={"/"}>Royal Cafe &amp;<br/>Resturant</Link></h2></li>
        </ul>
    )
}