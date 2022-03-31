import classes from "../styles/Footer.module.css";
import Logo from "./Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"
// console.log(faFacebook);

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.firstFooterPart}>
                <Logo />
                <p>We offers high-quality foods and the best delivery service, and the food market you can blindly trust</p>
                <div className={classes.socialIcon}>
                <FontAwesomeIcon icon={} />
                </div>
            </div>
            <div></div>
            <div></div>
        </footer>
    )
}