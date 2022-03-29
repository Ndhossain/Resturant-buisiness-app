import { useState } from "react";
import classes from "../styles/Sidebar.module.css";
import withCategories from "./HOC/withCategories";
import useFetch from "./hooks/useFetch";
import Mealitems from "./Mealitems";

function Sidebar({ cateLoading, cateError, cateResult }) {
  const [mealValue, setMealValue] = useState({
    areaValue: null,
    categoryValue: "All Category Items",
  });

  const { loading, error, result } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    "GET"
  );
  const area = result ? result?.meals : [];
  const category = cateResult ? cateResult?.categories : [];

  const handleAllClick = (e) => {
    setMealValue(() => ({
      areaValue: null,
      categoryValue: e.target.innerText,
    }));

    if (e.target.parentElement.parentElement.style.height === "57px") {
      e.target.parentElement.parentElement.style = "height : null";
      e.target.parentElement.lastChild.innerText = "expand_less";
    } else {
      e.target.parentElement.parentElement.style = "height : 57px";
      e.target.parentElement.lastChild.innerText = "expand_more";
    }
  };

  const handleAreaClick = (e) => {
    setMealValue(() => ({
      areaValue: e.target.innerText,
      categoryValue: null,
    }));
  };

  const handleSideBarItemClick = (e) => {
    setMealValue(() => ({
      areaValue: null,
      categoryValue: e.target.innerText,
    }));
  };

  return (
    <div className={classes.sidebar}>
      {cateLoading && <div>Loading....</div>}
      {cateError && <div>An error occured!</div>}
      {!cateLoading && !cateError && category.length > 0 && (
        <ul className={classes.sidebarMenu}>
          <div  style={{ height: "57px" }}>
            <li>
              <p onClick={handleAllClick}>All Category Items</p>
              <span className="material-icons-outlined">expand_more</span>
            </li>

            {loading && <div>Loading....</div>}
            {error && <div>An error occured!</div>}
            {!loading && !error && area.length > 0 && (
              <ul>
                {area.map((item, index) => (
                  <li onClick={handleAreaClick} key={index}>
                    {item.strArea}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {category.map((item) => (
            <div key={item.idCategory}>
              <li>
                <img src={item.strCategoryThumb} alt={item.strCategory} />
                <p onClick={handleSideBarItemClick}>{item.strCategory}</p>
                <span className="material-icons-outlined">chevron_right</span>
              </li>
            </div>
          ))}
        </ul>
      )}

      <Mealitems mealValue={mealValue} category={category} />
    </div>
  );
}

export default withCategories(Sidebar);
