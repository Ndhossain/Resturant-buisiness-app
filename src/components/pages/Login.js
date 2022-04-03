import { useState } from "react";
import classes from "../../styles/Login.module.css";
import { useAuth } from "../../contexts/AuthContext";

export default function Login({ activity, events, signupEvent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const {login} = useAuth()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(email, password);
      events()
    } catch (err) {
      console.log(error);
      setLoading(false);
      setError("Failed to login!");
    }
  }

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
          <form onSubmit={handleSubmit}>
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
            <input
              disabled={loading}
              className={classes.submitButton}
              type="submit"
              value="Submit"
            />
            {error && <p className="error">{error}</p>}
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
