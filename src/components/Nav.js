import Logo from "./Logo"
import Menu from "./Menu"
import classes from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <>
        <div className={classes.navbar}>
            <Logo />
            <Menu />
        </div>
        </>
    )
}