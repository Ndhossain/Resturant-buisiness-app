import { useState } from "react";
import classes from "../../styles/Contact.module.css";
import useAbout from "../hooks/useAbout";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { loading, error, stuffResult } = useAbout(`contacts`);

  return (
    <div className={classes.contact}>
      <img
        src={`https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80`}
        alt="contact background"
      />
      <div className={classes.contactInfo}>
        <h1 style={{ padding: `.6em` }}>Hours &#38; Location</h1>
        {loading && <div>Loading....</div>}
        {error && <div>Something Went wrong</div>}
        {!loading &&
          !error &&
          stuffResult?.length > 0 &&
          stuffResult.map((item, index) => <span key={index}>{item}</span>)}
        <h2 style={{ padding: `.4em`, fontWeight: `400` }}>Dine In</h2>
        <span>Wednesday | Thursday | Friday : 5:30 - 9:30 PM</span>
        <span>Friday &#38; Saturday : 5 - 10 PM</span>
        <span>Sunday Lunch : 12.30 - 1.30 PM</span>
        <span>Monday &#38; Tuesday : Closed</span>
        <span>----------------</span>
      </div>
      <div className={classes.connectUs}>
        <h1 style={{ padding: `.6em` }}>Connect With Us</h1>
        <form>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter Email"
            required
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type Your Message"
            name="w3review"
            rows="4"
            cols="50"
            required
          />
          <input className={classes.subButton} type="submit" />
        </form>
      </div>
    </div>
  );
}
