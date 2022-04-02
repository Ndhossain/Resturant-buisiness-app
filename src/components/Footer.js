import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, } from "react-icons/fa";
import classes from "../styles/Footer.module.css";
import Logo from "./Logo";


export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.firstFooterPart}>
        <Logo />
        <p>
          We offers high-quality foods and the best service, and you can blindly trust
        </p>
        <div className={classes.socialIcon}>
          <FaFacebook className={classes.icon1} />
          <FaTwitter className={classes.icon2} />
          <FaInstagram className={classes.icon3} />
          <FaYoutube className={classes.icon4} />
        </div>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
}
