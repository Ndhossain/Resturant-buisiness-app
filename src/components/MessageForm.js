import classes from "../styles/MessageForm.module.css";

export default function MessageForm({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className={classes.messageForm}>
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
  );
}
