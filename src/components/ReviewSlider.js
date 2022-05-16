import { useState } from "react";
import classes from "../styles/ReviewSlider.module.css";

export default function ReviewSlider({ loading, error, reviewResult }) {
  const [x, setX] = useState(0);

  console.log(reviewResult.length);

  return (
    <div className={classes.slideContainer}>
      <div className={classes.leftArrow} style={{ width: `48px` }}>
        <span
          onClick={() =>
            setX((prev) =>
              prev > -(100 * (reviewResult.length - 1)) ? prev - 100 : 0
            )
          }
          style={{ cursor: `pointer`, padding: `.5em` }}
          className="material-icons-outlined"
        >
          arrow_back_ios
        </span>
      </div>
      <div
        style={{
          overflow: `hidden`,
          background: `rgba(255, 255, 255, 0.1)`,
          width: `calc(100% - 96px)`,
        }}
      >
        <div
          className={classes.slider}
          style={{ transform: `translateX(${x}%)` }}
        >
          {loading && <span>Loading....</span>}
          {reviewResult.map((res, index) => (
            <div className={classes.sliderItem}>
              <div className={classes.contentContainer}>
                <div>
                  <p style={{ fontSize: `15px` }}>{res.review}</p>
                  <span
                    style={{
                      display: `block`,
                      fontSize: `14px`,
                      color: `#A9A9A9`,
                    }}
                  >
                    {res.name}
                  </span>
                  <span
                    style={{
                      display: `block`,
                      fontSize: `14px`,
                      margin: `12px 0 4px 0`,
                      color: `#A9A9A9`,
                    }}
                  >
                    {res.profession}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.rightArrow} style={{ width: `48px` }}>
        <span
          onClick={() =>
            setX((prev) =>
              prev < 0 ? prev + 100 : -(100 * (reviewResult.length - 1))
            )
          }
          style={{ cursor: `pointer`, padding: `.5em` }}
          className="material-icons-outlined"
        >
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
}
