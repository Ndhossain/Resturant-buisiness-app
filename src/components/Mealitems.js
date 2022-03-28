import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../styles/Mealitem.module.css";

export default function Mealitems({ mealValue, category }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const url = category.map(
      (item) =>
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`
    );

    axios.all(url.map((url) => axios.get(url))).then(
      (data) => setResponse(data),
    );

    if(loading) return setLoading(!loading);
    
  }, [category, loading]);

  const result = response?.map((item) => item.data.meals)

  return (
    <div className={classes.itemsSection}>
      <div>
        {loading && <div>Loading...</div>}
        {!loading && result?.length >= 0 &&
          result.map((items) => (
            items.map((item) => (
              <div className={classes.products} key={item.idMeal}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <span>Title: {item.strMeal}</span>
              <span>calories</span>
              <span>Details</span>
            </div>
            ))
          ))}
      </div>
    </div>
  );
}
