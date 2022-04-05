import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Menu.module.css";
import buttonclasses from "../styles/SignupButton.module.css";
import Button from "./Button";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeSignup, setActiveSignup] = useState(false);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLoginPage = () => {
    setActiveLogin(!activeLogin);
    setToggleMenu(false);
    setActiveSignup(false);
  };

  const handleSignupPage = () => {
    setActiveSignup(!activeSignup);
    setToggleMenu(false);
    setActiveLogin(false);
  };

  return (
    <>
      <Login
        activity={activeLogin}
        events={handleLoginPage}
        signupEvent={handleSignupPage}
      />
      <Signup
        activity={activeSignup}
        events={handleSignupPage}
        loginEvent={handleLoginPage}
      />
      <div
        className={classes.blackout}
        style={{
          display: `${toggleMenu && screenWidth < 1010 ? "block" : "none"}`,
        }}
      ></div>

      <div className={classes.hamBurger} onClick={handleMenuClick}>
        <h1 className="material-icons-outlined" style={{ fontSize: "40px" }}>
          {toggleMenu ? "close" : "menu"}
        </h1>
      </div>
      {(toggleMenu || screenWidth > 1010) && (
        <ul className={classes.menu}>
          <li>
            <a href="/About.html">
              <Button
                classes={buttonclasses}
                type="RESERVATION"
              />
            </a>
          </li>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/About.html">ABOUT US</a>
          </li>
          
          <li>
            <a href="/About.html">CONTACTS</a>
          </li>
          <li className={classes.profile}>
            {currentUser ? (
              <>
                <span className="material-icons-outlined">account_circle</span>
                <p>{currentUser.displayName}</p>
                <span
                  style={{ cursor: `pointer` }}
                  className="material-icons-outlined"
                  onClick={logout}
                >
                  logout
                </span>
              </>
            ) : (
              <>
                <Button
                  classes={buttonclasses}
                  type="LOG IN"
                  events={handleLoginPage}
                />
                <Button
                  classes={buttonclasses}
                  type="SIGN UP"
                  events={handleSignupPage}
                />
              </>
            )}
          </li>
        </ul>
      )}
    </>
  );
}
