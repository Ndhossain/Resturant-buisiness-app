import classes from "../styles/FullImage.module.css";

export default function FullImage({ images, indexNo }) {
  return (
    <div className={classes.FullImage}>
      <span className="material-icons-outlined">arrow_back_ios</span>
      <img src={images[indexNo].url} alt={`full`} />
      <span className="material-icons-outlined">arrow_forward_ios</span>
    </div>
  );
}
