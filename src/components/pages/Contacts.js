import useAbout from "../hooks/useAbout";
import classes from "../../styles/Contact.module.css"

export default function Contacts() {
    const {loading, error, stuffResult} = useAbout(`contacts`);
    console.log(stuffResult);
    return (
        <div className={classes.contact}>
            <img src={`https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80`} alt="contact background"/>
            <div className={classes.contactInfo}>
                {loading && <div>Loading....</div>}
                {error && <div>Something Went wrong</div>}
                {!loading && !error && stuffResult?.length > 0 && stuffResult.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
            <div></div>
        </div>
    )
}