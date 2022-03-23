import { useEffect, useState } from "react";
import classes from "../styles/Slider.module.css";
import CateItemSlider from "./CateItemSlider";
import withCategories from "./HOC/withCategories";

function Slider({ cateLoading, cateError, cateResult }) {
  const [x, setX] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const category = cateResult ? cateResult?.categories : [];
  useEffect(() => {
    const changeWidth = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    const slidertimer = setTimeout(() => {
      setX((prevX) =>
        windowSize > 680
          ? prevX >= -(16.65 * (category.length - 6.2))
            ? prevX - 16.65
            : setX(0)
          : prevX >= -(33.3 * (category.length - 3))
          ? prevX - 33.3
          : setX(0)
      );
    }, 3000);

    return () => {
      clearTimeout(slidertimer);
      window.removeEventListener("resize", changeWidth);
    };
  });

  const leftClick = () => {
    setX((prevX) =>
      windowSize > 680
        ? prevX >= -(16.65 * (category.length - 6.2))
          ? prevX - 16.65
          : setX(0)
        : prevX >= -(33.3 * (category.length - 3))
        ? prevX - 33.3
        : setX(0)
    );
  };

  function rightClick() {
    setX((prevX) =>
      windowSize > 680
        ? prevX < 0
          ? prevX + 16.65
          : setX(-(16.65 * (category.length - 6)))
        : prevX < 0
        ? prevX + 33.3
        : setX(-(33.3 * (category.length - 3)))
    );
  }

  return (
    <>
      {cateLoading && <div>Loading....</div>}
      {cateError && <div>An error occured!</div>}
      {!cateLoading && !cateError && category.length > 0 && (
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

export default withCategories(Slider);
