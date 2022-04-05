import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import classes from "../../styles/Signup.module.css";

export default function Signup({ activity, events, loginEvent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) return setError("password dont match");

    try {
      setError("");
      setLoading(true);
      await signup(email, password, `${firstName} ${lastName}`);
      events();
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError("Failed to Create an account");
    }
  }

  return (
    <div
      style={{ display: `${activity ? "block" : "none"}` }}
      className={classes.signup}
    >
      <h1
        onClick={() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setAgree();
          setError("");
          events();
        }}
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="FIRST NAME"
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="LAST NAME"
            />
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
            />
            {error && <p className="error">{error}</p>}
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="CONFIRM PASSWORD"
            />
            <div style={{ marginBottom: `1em` }}>
              <input
                type="checkbox"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
              />{" "}
              <span>I agree to the Terms &amp; Conditions</span>
            </div>
            <input
              disabled={loading}
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
