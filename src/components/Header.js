import classes from "../styles/Header.module.css"
import headerImg from "../assets/header.jpg"

export default function Header() {
    return (
        <div style={{height: "600px"}}>
        <header className={classes.heroSec} style={{backgroundImage: `url(${headerImg})`,}}>
        
        </header>
        <div className={classes.headerContent}>
                <h2>TEST IS OUR FIRST PRIORITY</h2>
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sapiente eos excepturi magnam tempore quos modi, debitis.</p>
            </div>
        
        </div>
    )
}