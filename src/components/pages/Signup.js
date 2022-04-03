import classes from "../../styles/Signup.module.css";

export default function Signup({ activity, events, loginEvent }) {
  return (
    <div
      style={{ display: `${activity ? "block" : "none"}` }}
      className={classes.signup}
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
          <h1>Sign up Now</h1>
          <br />
          <br />
          <form>
            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
            <input type="text" placeholder="ENTER EMAIL" />
            <input type="password" placeholder="PASSWORD" />
            <input type="text" placeholder="CONFIRM PASSWORD" />
            <div style={{ marginBottom: `1em` }}>
              <input type="checkbox" />{" "}
              <span>I agree to the Terms &amp; Conditions</span>
            </div>
            <input
              className={classes.submitButton}
              type="submit"
              value="Submit"
            />
          </form>
          <p>
            Already have an account?{" "}
            <span style={{ cursor: `pointer` }} onClick={loginEvent}>
              Login
            </span>{" "}
            instead.
          </p>
        </div>
      </div>
    </div>
  );
}
