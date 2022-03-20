import classes from "../styles/CateItemslider.module.css";

export default function CateItemSlider({ title, imageSource }) {
  return (
    <div className={classes.cateItem}>
      <img src={imageSource} alt={title} />
      <h6>{title}</h6>
    </div>
  );
}
