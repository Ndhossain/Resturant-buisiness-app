import { useState } from "react";
import classes from "../../styles/AdminGallery.module.css";
import useGallery from "../hooks/useGallery";

export default function AdminGallery() {
  const [open, setOpen] = useState();
  const { loading, error, galleryResult } = useGallery();
  const result = Object.entries(galleryResult[1] ? galleryResult[1] : [])

  console.log(result?.forEach((keys, val) => console.log(keys)))
  result?.map((val, keys) => console.log(val))

  return (
    <div>
      <h1>Gallery</h1>
      <div className={classes.eventSec}>
        <span style={{ cursor: `pointer` }}>
          Event's Photos
          {!loading &&
            !error &&
            galleryResult.length > 0 &&
            ` (${galleryResult[0].length})`}
        </span>
        <span style={{ cursor: `pointer` }} className="material-icons-outlined">
          add
        </span>
      </div>
      <div style={{ cursor: `pointer` }} className={classes.eventSec}>
        <span>Resturant's Photos {`(4)`}</span>
        <span className="material-icons-outlined">arrow_drop_down</span>
      </div>
      {!loading &&
        !error &&
        galleryResult.length > 0 &&
        Object.keys(galleryResult[1])?.map((title, index) => (
          <div className={classes.subSec} key={index}>
            <span style={{ cursor: `pointer`, textTransform: `capitalize` }}>
              {title} Photos {galleryResult[1].title?.length}
            </span>
            <span
              style={{ cursor: `pointer` }}
              className="material-icons-outlined"
            >
              add
            </span>
          </div>
        ))}
    </div>
  );
}
