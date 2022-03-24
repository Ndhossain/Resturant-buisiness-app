import { useState } from "react";
import classes from "../styles/Sidebar.module.css";
import withCategories from "./HOC/withCategories";
import useFetch from "./hooks/useFetch";

function Sidebar({ cateLoading, cateError, cateResult }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { loading, error, result } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    "GET"
  );
  const area = result ? result?.meals : [];
  const category = cateResult ? cateResult?.categories : [];

  const handleSideBarItemClick = (e) => {
    if (e.target) {
      e.target.parentElement.style.height === "57px"
        ? (e.target.parentElement.style = "height : 100%")
        (e.target.lastChild.innerText = "expand_less")
        : (e.target.parentElement.style = "height : 57px")
        (e.target.lastChild.innerText = "expand_more")
    };
  };

  return (
    <div className={classes.sidebar}>
      {cateLoading && <div>Loading....</div>}
      {cateError && <div>An error occured!</div>}
      {!cateLoading && !cateError && category.length > 0 && (
        <ul>
          <div>
            <li>
              All Items
              {/* <span class="material-icons-outlined">
                        expand_less
                    </span> */}
            </li>
          </div>
          {category.map((item) => (
            <div
              key={item.idCategory}
              onClick={handleSideBarItemClick}
              style={{ height: "57px" }}
            >
              <li>
                <img src={item.strCategoryThumb} alt={item.strCategory} />
                {item.strCategory}
                <span className="material-icons-outlined">expand_more</span>
              </li>
              <ul key={5555555}>
                <li>All</li>
                {area.map((item, index) => (
                  <li key={index}>{item.strArea}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default withCategories(Sidebar);
