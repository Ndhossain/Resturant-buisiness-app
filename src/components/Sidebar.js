import classes from "../styles/Sidebar.module.css"

export default function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <ul>
                <li>
                    All Items
                    {/* <span class="material-icons-outlined">
                        expand_less
                    </span> */}
                </li>
                <li>
                    All Meals
                    <span className="material-icons-outlined">
                        expand_more
                    </span>
                </li>
                <li>
                    All Meals
                    <span className="material-icons-outlined">
                        expand_more
                    </span>
                </li>
            </ul>
        </div>
    )
}