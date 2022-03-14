export default function Button({classes, type}) {
    return (
        <button className={classes.navButton}>{type}</button>
    )
}