import classes from "../styles/MealInfo.module.css";
import useFetch from "./hooks/useFetch";

export default function MealInfo({ mealName, setMealInfo, setMealName }) {
  const { loading, error, result } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
    "GET"
  );

  return (
    <div className={classes.mealDetails}>
      <h1
        onClick={() => {
          setMealName("");
          setMealInfo(false);
        }}
        className={`${classes.close} material-icons-outlined`}
      >
        close
      </h1>
      <div className={classes.information}>
        {loading && <div>Loading...</div>}
        {error && <div>Something Went Wrong!</div>}
        {!loading && !error && result && (
          <>
            <img
              src={result?.meals[0].strMealThumb}
              alt={result?.meals[0].strMeal}
            />
            <h1>{result?.meals[0].strMeal}</h1>
            <p>Type: {result?.meals[0].strArea}</p>
            <p style={{ marginTop: `-1em` }}>
              Category: {result?.meals[0].strCategory}
            </p>
            <p>
              <b>Description:</b> {result?.meals[0].strInstructions}
            </p>
            <ul className={classes.ingrideint}>
              <li className={classes.title}>
                <b>Ingridients with Measurement:</b>
              </li>
              <li>{`${result?.meals[0].strIngredient1} ${result?.meals[0].strMeasure1}`}</li>
              <li>{`${result?.meals[0].strIngredient2} ${result?.meals[0].strMeasure2}`}</li>
              <li>{`${result?.meals[0].strIngredient3} ${result?.meals[0].strMeasure3}`}</li>
              <li>{`${result?.meals[0].strIngredient4} ${result?.meals[0].strMeasure4}`}</li>
              <li>{`${result?.meals[0].strIngredient5} ${result?.meals[0].strMeasure5}`}</li>
              <li>{`${result?.meals[0].strIngredient6} ${result?.meals[0].strMeasure6}`}</li>
              <li>{`${result?.meals[0].strIngredient7} ${result?.meals[0].strMeasure7}`}</li>
              <li>{`${result?.meals[0].strIngredient8} ${result?.meals[0].strMeasure8}`}</li>
              <li>{`${result?.meals[0].strIngredient9} ${result?.meals[0].strMeasure9}`}</li>
              <li>{`${result?.meals[0].strIngredient1} ${result?.meals[0].strMeasure10}`}</li>
              <li>{`${result?.meals[0].strIngredient10} ${result?.meals[0].strMeasure11}`}</li>
              <li>{`${result?.meals[0].strIngredient11} ${result?.meals[0].strMeasure1}`}</li>
              <li>{`${result?.meals[0].strIngredient12} ${result?.meals[0].strMeasure12}`}</li>
              <li>{`${result?.meals[0].strIngredient13} ${result?.meals[0].strMeasure13}`}</li>
              <li>{`${result?.meals[0].strIngredient14} ${result?.meals[0].strMeasure14}`}</li>
              <li>{`${result?.meals[0].strIngredient15} ${result?.meals[0].strMeasure15}`}</li>
              <li>{`${result?.meals[0].strIngredient16} ${result?.meals[0].strMeasure16}`}</li>
              <li>{`${result?.meals[0].strIngredient17} ${result?.meals[0].strMeasure17}`}</li>
              <li>{`${result?.meals[0].strIngredient18} ${result?.meals[0].strMeasure18}`}</li>
              <li>{`${result?.meals[0].strIngredient19} ${result?.meals[0].strMeasure19}`}</li>
              <li>{`${result?.meals[0].strIngredient20} ${result?.meals[0].strMeasure20}`}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
