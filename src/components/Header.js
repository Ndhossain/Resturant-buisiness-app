import { useEffect, useState } from "react";
import headerImg from "../assets/header.jpg";
import headerImg2 from "../assets/header2.jpeg";
import classes from "../styles/Header.module.css";
const headerImage = [headerImg2, headerImg];

export default function Header() {
  const [image, setImage] = useState(headerImage[1]);

  useEffect(() => {
    let index = 0;
    const headerInterval = setInterval(() => {
      setImage(headerImage[index]);
      index =
        index === 0
          ? (index += 1)
          : index === headerImage.length - 1
          ? 0
          : index;
    }, 3000);

    return () => {
      clearInterval(headerInterval)
    }
  }, []);

  return (
    <header className={classes.heroSec}>
      <img src={image} alt="HeaderImage" />
      <div className={classes.headerContent}>
        <h2>TEST IS OUR FIRST PRIORITY</h2>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sapiente
          eos excepturi magnam tempore quos modi, debitis.
        </p>
      </div>
    </header>
  );
}
