import classes from "../styles/FullImage.module.css";

export default function FullImage({
  images,
  indexNo,
  setFullScreen,
  setIndexNo,
}) {
  console.log(indexNo);
  console.log(images);
  return (
    <div className={classes.FullImage}>
      <h1
        onClick={() => setFullScreen(false)}
        className={`${classes.close} material-icons-outlined`}
      >
        close
      </h1>
      <span
        onClick={() => setIndexNo((prev) => (prev > 0 ? prev - 1 : 0))}
        style={{ cursor: `pointer`, padding: `.5em` }}
        className="material-icons-outlined"
      >
        arrow_back_ios
      </span>
      <img src={images[indexNo].url} alt={`full`} />
      <span
        onClick={() =>
          setIndexNo((prev) => (prev < images.length - 1 ? prev + 1 : prev))
        }
        style={{ cursor: `pointer`, padding: `.5em` }}
        className="material-icons-outlined"
      >
        arrow_forward_ios
      </span>
    </div>
  );
}
