import classes from "../styles/FoodCatalog.module.css";
import useFetch from "./hooks/useFetch";

export default function FoodCatalog() {
  const { loading, error, result } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    "GET"
  );

  const category = result ? result?.categories : [];

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>An error occured!</div>}
      {!loading && !error && category.length > 0 && (
        <div className={classes.cateItems}>
          {category.map((item) => (
            <div className={classes.cateItem} key={item.idCategory}>
              <img src={item.strCategoryThumb} alt={item.strCategory} />
              <h4>{item.strCategory}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
