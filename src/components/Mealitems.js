import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../styles/Mealitem.module.css";

export default function Mealitems({ mealValue, category }) {
  const [response, setResponse] = useState({ myArray: [] });

  useEffect(() => {
      const myArray = [];
    const url = category.map(
      (item) =>
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`
    );
    const response = url.map((urls) =>
     axios.get(urls)
     .then((res)=>
     console.log(res.data.meals))
    );
    
  }, [category]);

  console.log(response);

  return (
    <div className={classes.itemsSection}>
      <div>
        {/* {response.length >= 0 &&
          response.map((item) => (
            <div className={classes.products} key={item.idMeal}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <span>Title: {item.strMeal}</span>
              <span>calories</span>
              <span>Details</span>
            </div>
          ))} */}
      </div>
    </div>
  );
}
