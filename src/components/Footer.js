import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, } from "react-icons/fa";
import classes from "../styles/Footer.module.css";
import Logo from "./Logo";


console.log(FaFacebook);

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.firstFooterPart}>
        <Logo />
        <p>
          We offers high-quality foods and the best delivery service, and the
          food market you can blindly trust
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
