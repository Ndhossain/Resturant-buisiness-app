import { useState } from "react";
import classes from "../styles/Sidebar.module.css";
import withCategories from "./HOC/withCategories";
import useFetch from "./hooks/useFetch";
import Mealitems from "./Mealitems";


function Sidebar({ cateLoading, cateError, cateResult }) {
  const [mealValue , setMealValue] = useState({
    areaValue : null,
    categoryValue: 'All Category Items',
    allValue: null,
  })

  const { loading, error, result } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    "GET"
  );
  const area = result ? result?.meals : [];
  const category = cateResult ? cateResult?.categories : [];

  const handleAllClick = (e) => {
    setMealValue((prevValue) => (
    {
      areaValue: null,
      categoryValue: prevValue.categoryValue,
      allValue: e.target.innerText,
    }))
  }

  const handleAreaClick = (e) => {
    setMealValue((prevValue) => ({
      areaValue : e.target.innerText,
      categoryValue: prevValue.categoryValue,
      allValue: null,
    }))
  }

  const handleSideBarItemClick = (e) => {
    console.log(e.target)
      if (e.target.parentElement.style.height === "57px") {
        (e.target.parentElement.style = "height : 100%");
        (e.target.lastChild.innerText = "expand_less");
      } else {
        (e.target.parentElement.style = "height : 57px");
        (e.target.lastChild.innerText = "expand_more");
      };
  };

  return (
    <div className={classes.sidebar}>
      {cateLoading && <div>Loading....</div>}
      {cateError && <div>An error occured!</div>}
      {!cateLoading && !cateError && category.length > 0 && (
        <ul className={classes.sidebarMenu}>
          <div onClick={handleAllClick}>
            <li>
              All Category Items
            </li>
          </div>
          {category.map((item) => (
            <div
              key={item.idCategory}
              style={{ height: "57px" }}
            >
              <li >
                <img src={item.strCategoryThumb} alt={item.strCategory} />
                <p onClick={handleSideBarItemClick}>{item.strCategory}</p>
                <span className="material-icons-outlined">expand_more</span>
              </li>
              {loading && <div>Loading....</div>}
              {error && <div>An error occured!</div>}
              {!loading && !error && area.length > 0 && (
                <ul>
                  <li onClick={handleAllClick}>All Area Items</li>
                  {area.map((item, index) => (
                    <li onClick={handleAreaClick} key={index}>{item.strArea}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      )}
      
      <Mealitems mealValue={mealValue} />
    </div>
  );
}

export default withCategories(Sidebar);
