export default function Button({classes, type, events}) {
    return (
        <button onClick={events} className={classes.navButton}>{type}</button>
    )
}