import { useEffect, useState } from "react";
import headerImg from "../assets/header.jpg";
import headerImg2 from "../assets/header2.jpeg";
import headerImg3 from "../assets/header3.jpg";
import headerImg4 from "../assets/header4.jpg";
import classes from "../styles/Header.module.css";
const headerImage = [headerImg2, headerImg, headerImg3, headerImg4];

export default function Header() {
  const [image, setImage] = useState(headerImage[headerImage.length - 1]);

  useEffect(() => {
    let index = 0;
    const headerInterval = setInterval(() => {
      setImage(headerImage[index]);
      index =
        index < headerImage.length - 1
          ? (index += 1)
          : index === headerImage.length - 1
          ? 0
          : index;
    }, 4000);

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
