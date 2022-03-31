import { useEffect, useState } from "react";
import classes from "../styles/Mainsidebar.module.css";

export default function Mainsidebar({
  cateLoading,
  cateError,
  category,
  handleAllClick,
  loading,
  error,
  area,
  handleAreaClick,
  handleSideBarItemClick,
  x,
  handleCloseClick,
  disStyle,
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  console.log(screenWidth);
  useEffect(() => {
    const widthChanging = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", widthChanging);

    return () => {
      window.removeEventListener("resize", widthChanging);
    };
  }, []);
  return (
    <>
      {cateLoading && <div>Loading....</div>}
      {cateError && <div>An error occured!</div>}
      {!cateLoading && !cateError && category.length > 0 && (
        <>
          <div
            className={classes.sidebarMain}
            style={screenWidth <= 1040 ? { top: `${x}%` } : null}
          >
            <ul className={classes.sidebarMenu}>
              <div style={{ height: "57px" }}>
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
                    <span className="material-icons-outlined">
                      chevron_right
                    </span>
                  </li>
                </div>
              ))}
            </ul>
            <button
              onClick={handleCloseClick}
              style={{ display: `${disStyle}` }}
              className={classes.closeButton}
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
}
