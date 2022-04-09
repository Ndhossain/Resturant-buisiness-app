import classes from "../styles/ImageGrid.module.css"

export default function ImageGrid({ images = [] }) {
  return (
    <div className={classes.imageGrid}>
    {images?.map((image, index) => (
      // <div key={index} className={classes.images}>
      // </div>
      <img src={image.url} alt="Gallery Images" />
    ))}
  </div>
  );
}
