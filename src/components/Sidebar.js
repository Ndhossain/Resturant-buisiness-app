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

  const handleSideBarItemClick = () => {
    setToggleSidebar(!toggleSidebar);
  };

  console.log(result ? result?.meals : []);
  const category = cateResult ? cateResult?.categories : [];
  return (
    <div className={classes.sidebar}>
      {cateLoading && <div>Loading....</div>}
      {cateError && <div>An error occured!</div>}
      {!cateLoading && !cateError && category.length > 0 && (
        <ul>
          <li>
            All Items
            {/* <span class="material-icons-outlined">
                        expand_less
                    </span> */}
          </li>
          {category.map((item) => (
            <>
              <li key={item.idCategory} onClick={item.strCategory && handleSideBarItemClick}>
                <img src={item.strCategoryThumb} alt={item.strCategory} />
                {item.strCategory}
                <span className="material-icons-outlined">expand_more</span>
              </li>
              {toggleSidebar && (
                  <>
                  {loading && <div>Loading....</div>}
              {error && <div>An error occured!</div>}
              {!loading && !error && area.length > 0 && (
                <ul>
                  <li>All</li>
                  {area.map((areas, index) => (
                    <li key={index}>{areas.strArea}</li>
                  ))}
                </ul>
              )}
                  </>
              )}
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default withCategories(Sidebar);
