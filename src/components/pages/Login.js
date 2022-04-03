import classes from "../../styles/Login.module.css";

export default function Login({ activity, events, signupEvent }) {
  return (
    <div
      className={classes.login}
      style={{ display: `${activity ? "block" : "none"}` }}
    >
      <h1
        onClick={events}
        style={{ cursor: `pointer`, padding: `.5em`, float: `right` }}
        className="material-icons-outlined"
      >
        close
      </h1>
      <div className={classes.inputSection}>
        <div className={classes.inputItems}>
          <h1>Login</h1>
          <br />
          <br />
          <form>
            <input type="text" placeholder="ENTER EMAIL" />
            <input type="password" placeholder="PASSWORD" />
            <input
              className={classes.submitButton}
              type="submit"
              value="Submit"
            />
          </form>
          <p>
            Don't have an account?{" "}
            <span style={{ cursor: `pointer` }} onClick={signupEvent}>
              Signup
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
