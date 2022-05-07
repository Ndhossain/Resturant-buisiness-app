import useGallery from "../hooks/useGallery";
import classes from "../../styles/AdminGallery.module.css"

export default function AdminGallery() {
  const { loading, error, galleryResult } = useGallery();

  console.log(galleryResult);

  return (
    <div>
      <h1>Gallery</h1>
      <div className={classes.eventSec}>
        <span>
          Event's Photos{" "}
          {!loading &&
            !error &&
            galleryResult.length > 0 &&
            `(${galleryResult[0].length})`}
        </span>
        <span className="material-icons-outlined">add</span>
      </div>
    </div>
  );
}
