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
    console.dir(e.target);
    if (e.target) {
      e.target.innerText = 'j'
    }
  };

  console.log(result ? result?.meals : []);
  return (
    <div className={classes.sidebar}>
      {cateLoading && <div>Loading....</div>}
      {cateError && <div>An error occured!</div>}
      {!cateLoading && !cateError && category.length > 0 && (
        <ul key={1}>
          <li>
            All Items
            {/* <span class="material-icons-outlined">
                        expand_less
                    </span> */}
          </li>
          {category.map((item) => (
            <li key={item.idCategory} onClick={handleSideBarItemClick}>
              <img src={item.strCategoryThumb} alt={item.strCategory} />
              {item.strCategory}
              {/* <span className="material-icons-outlined">expand_more</span> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default withCategories(Sidebar);
