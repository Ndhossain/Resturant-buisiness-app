import { getDatabase, ref, set } from "firebase/database";
import classes from "../styles/AdminFullImage.module.css";

export default function AdminFullImage({
  image,
  index,
  setIndex,
  setFullSize,
  fullSize,
  title,
}) {
  const handleDeleteClick = async () => {
    image.splice(index, 1);
    const db = getDatabase();
    const imageRef = ref(
      db,
      `gallery/${title === `events` ? title : `resturant/${title}`}`
    );
    await set(imageRef, image);
    window.location.reload();
  };

  return (
    <div className={classes.fullSize}>
      <div className={classes.imageSec}>
        <span
          onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : 0))}
          style={{ cursor: `pointer` }}
          className="material-icons-outlined"
        >
          arrow_back_ios
        </span>
        <img
          style={{ height: `100%` }}
          src={image[index].url}
          alt="full Size"
        />
        <span
          onClick={() =>
            setIndex((prev) => (prev < image.length - 1 ? prev + 1 : prev))
          }
          style={{ cursor: `pointer` }}
          className="material-icons-outlined"
        >
          arrow_forward_ios
        </span>
      </div>
      <div className={classes.buttonSec}>
        <button onClick={handleDeleteClick} className={classes.delButton}>
          <span className="material-icons-outlined">delete_forever</span>Delete
        </button>
        <button
          className={classes.closeButton}
          onClick={() => setFullSize(!fullSize)}
        >
          <span className="material-icons-outlined">cancel</span>
          Close
        </button>
      </div>
    </div>
  );
}
