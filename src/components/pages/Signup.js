import classes from "../../styles/Signup.module.css"

export default function Signup() {
    return (
    <div className={classes.signup}>
    <span className="material-icons-outlined">close</span>
    <div className={classes.inputSection}>
       <div className={classes.inputItems}>
          <h1>Sign up Now</h1>
          <br/>
          <br/>
      <form>
      <input type="text" placeholder="FIRST NAME" />
      <input type="text" placeholder="LAST NAME" />
        <input type="text" placeholder="ENTER EMAIL" />
        <input type="password" placeholder="PASSWORD" />
        <input type="text" placeholder="CONFIRM PASSWORD" />
        <div style={{marginBottom: `1em`}}>
        <input type="checkbox"/>  <span>I agree to the Terms &amp; Conditions</span>
        </div>
        <input className={classes.submitButton} type="submit" value="Submit" />
      </form>
      <p>Already have an account? Login instead.</p>
      </div>
    </div>
  </div>
    )
}