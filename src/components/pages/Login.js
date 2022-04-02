import classes from "../../styles/Login.module.css";

export default function Login() {
  return (
    <div className={classes.login}>
      <span className="material-icons-outlined">close</span>
      <div className={classes.inputSection}>
         <div className={classes.inputItems}>
            <h1>Login</h1>
            <br/>
            <br/>
        <form>
          <input type="text" placeholder="ENTER EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <input className={classes.submitButton} type="submit" value="Submit" />
        </form>
        <p>Don't have an account? Signup.</p>
        </div>
      </div>
    </div>
  );
}
