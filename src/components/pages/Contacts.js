import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import classes from "../../styles/Contact.module.css";
import useAbout from "../hooks/useAbout";
import MessageForm from "../MessageForm";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { loading, error, stuffResult } = useAbout(`contacts`);
  const { currentUser } = useAuth();
  console.log(stuffResult);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = currentUser ? currentUser.uid : null;

    const db = getDatabase();
    const messageRef = ref(
      db,
      `information/message/${id ? id : email.replace(".", "to")}`
    );

    await set(messageRef, {
      email: email,
      name: name,
      message: message,
    });

    setName("");
    setEmail("");
    setMessage("");
  };

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
        <MessageForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
          messageHolder={`Type Your Message`}
          detailsHolder={`Enter Email`}
        />
      </div>
    </div>
  );
}
