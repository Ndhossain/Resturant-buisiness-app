import classes from "../styles/Greetings.module.css";

export default function Greetings({ setGreet, greet }) {
  return (
    <div className={classes.greetContainer}>
      <div className={classes.greetCard}>
        <p>We will sent you a confirmation mail soon.</p>
        <p>Thank You!</p>
        <button onClick={() => setGreet(!greet)}>Okay</button>
      </div>
    </div>
  );
}
