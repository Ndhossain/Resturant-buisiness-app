import { useState } from "react";
import classes from "../styles/FoodCatalog.module.css";
import useFetch from "./hooks/useFetch";
import SlideItem from "./SlideItems";

console.log(classes);

export default function Slider({ url }) {
  const [x, setX] = useState(0);
  const { loading, error, result } = useFetch(url, "GET");

  const category = result ? result?.categories : [];

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>An error occured!</div>}
      {!loading && !error && category.length > 0 && (
        <div
          className={classes.cateItems}
          style={{ transform: `translateX(${x}%)` }}
        >
          <div className={classes.leftArrow}>
            <h2 className={`material-icons-outlined`}>navigate_before</h2>
          </div>

          <div className={classes.rightArrow}>
            <h2 className={`material-icons-outlined`}>navigate_next</h2>
          </div>

          {category.map((item) => (
            <SlideItem
              key={item.idCategory}
              title={item.strCategory}
              imageSource={item.strCategoryThumb}
              styles={classes.cateItem}
            />
          ))}
        </div>
      )}
    </>
  );
}
