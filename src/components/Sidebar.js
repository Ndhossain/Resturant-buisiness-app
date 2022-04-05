import { useState,useEffect } from "react";
import classes from "../styles/Sidebar.module.css";
import withCategories from "./HOC/withCategories";
import useFetch from "./hooks/useFetch";
import Mainsidebar from "./Mainsidebar";
import Mealitems from "./Mealitems";

function Sidebar({ cateLoading, cateError, cateResult }) {
  const [mealValue, setMealValue] = useState({
    areaValue: null,
    categoryValue: "All Category Items",
  });
  const [x, setX] = useState(100)
  const [disStyle, setDisStyle] = useState('none')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const widthChanging = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", widthChanging);

    return () => {
      window.removeEventListener("resize", widthChanging);
    };
  }, []);

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

  const handleSidebarMenu = () => {
    setX((prev) => {if(prev === 100) return 50;} )

    setDisStyle((prev) => prev === 'none' ? 'block' : null)
    
  }

  const handleCloseClick = () => {
    setX(prev => prev === 50 ? 100 : null)
    
    setDisStyle((prev) => prev === 'block' ? 'none' : null)

  }

  return (
    <>
    <div style={{ display: `${screenWidth <= 1040 ? disStyle : `none`}` }}  className={classes.disBlur}></div>
    <div className={classes.fooditems}>
      <h1 style={{ textAlign: "center", padding: "1em 0" }}>Our Food Items</h1>
      <div className={classes.allmeals}>
        <div className={classes.sidebar}>
          <Mainsidebar
            cateLoading={cateLoading}
            cateError={cateError}
            category={category}
            handleAllClick={handleAllClick}
            loading={loading}
            error={error}
            area={area}
            handleAreaClick={handleAreaClick}
            handleSideBarItemClick={handleSideBarItemClick}
            handleCloseClick={handleCloseClick}
            x={x}
            disStyle={disStyle}
            screenWidth={screenWidth}
          />

          <Mealitems mealValue={mealValue} category={category} handleSidebarMenu={handleSidebarMenu} />
        </div>
      </div>
    </div>
    </>
  );
}

export default withCategories(Sidebar);
