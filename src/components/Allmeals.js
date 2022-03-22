import classes from "../styles/Allmeals.module.css";
import Mealitems from "./Mealitems";
import Sidebar from "./Sidebar";

export default function Allmeals() {
    return (
        <div className={classes.fooditems}>
        <h1 style={{textAlign : "center", padding : "1em 0",}}>Our Food Items</h1>
            <div className={classes.allmeals}>
                <Sidebar />
                <Mealitems />
            </div>
        </div>
    )
}