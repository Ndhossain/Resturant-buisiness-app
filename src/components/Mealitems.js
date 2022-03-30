import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../styles/Mealitem.module.css";

export default function Mealitems({ mealValue, category, handleSidebarMenu }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(mealValue.categoryValue);

  useEffect(() => {
    const url =
      mealValue.areaValue === null &&
      mealValue.categoryValue === "All Category Items"
        ? category.map(
            (item) =>
              `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`
          )
        : mealValue.areaValue === null &&
          mealValue.categoryValue !== "All Category Items" &&
          mealValue.categoryValue !== null
        ? [
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealValue.categoryValue}`,
          ]
        : [
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealValue.areaValue}`,
          ];

    axios
      .all(url.map((url) => axios.get(url)))
      .then((data) => setResponse(data));

    if (loading) return setLoading(!loading);
  }, [category, loading, mealValue.areaValue, mealValue.categoryValue]);

  const allValueResult = response?.map((item) => item.data.meals);

  console.log(loading);

  return (
    <div className={classes.itemsSection}>
      <div className={classes.head}>
      <h3>
        {mealValue.categoryValue
          ? mealValue.categoryValue
          : mealValue.areaValue}
      </h3>
      <button onClick={handleSidebarMenu} className={classes.resItem}>
        Categories
      </button>
      </div>
      <br/>
      <div className={classes.menuItems}>
        {loading && <div>Loading...</div>}
        {!loading &&
          allValueResult?.length >= 0 &&
          allValueResult.map((items) =>
            items.map((item) => (
              <div className={classes.products} key={item.idMeal}>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <span>{item.strMeal}</span>
              </div>
            ))
          )}
      </div>
    </div>
  );
}
