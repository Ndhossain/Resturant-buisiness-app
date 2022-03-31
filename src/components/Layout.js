import classes from "../styles/Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
