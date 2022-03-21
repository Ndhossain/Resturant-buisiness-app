import { useState } from "react";
import classes from "../styles/Slider.module.css";
import CateItemSlider from "./CateItemSlider";
import useFetch from "./hooks/useFetch";

export default function Slider({ url }) {
  const [x, setX] = useState(0);
  const { loading, error, result } = useFetch(url, "GET");
  console.log(x)

  function leftClick() {
    setX((prevX) => prevX - 16.65);
  }

  function rightClick() {
    setX((prevX) => prevX + 16.65);
  }

  const category = result ? result?.categories : [];

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>An error occured!</div>}
      {!loading && !error && category.length > 0 && (
        <div className={classes.slider}>
          <div onClick={leftClick} className={classes.Arrow}>
            <h4 className={`material-icons-outlined`}>navigate_before</h4>
          </div>

          <div className={classes.hider}>
            <div
              className={classes.cateItems}
              style={{ transform: `translateX(${x}%)` }}
            >
              {category.map((item) => (
                <CateItemSlider
                  key={item.idCategory}
                  title={item.strCategory}
                  imageSource={item.strCategoryThumb}
                />
              ))}
            </div>
          </div>

          <div onClick={rightClick} className={classes.Arrow}>
            <h4 className={`material-icons-outlined`}>navigate_next</h4>
          </div>
        </div>
      )}
    </>
  );
}
