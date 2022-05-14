import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/AdminGallery.module.css";
import AddImage from "../AddImage";
import useGallery from "../hooks/useGallery";

export default function AdminGallery() {
  const [open, setOpen] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [value, setValue] = useState('')
  const { loading, error, galleryResult } = useGallery();

  return (
    <div>
      <h1>Gallery</h1>
      <div className={classes.eventSec}>
        {loading && <span>{`(Loading Data)`}</span>}

        {error && <span>Failed to load data</span>}
        {!loading && !error && (
          <>
            <Link
              to="images"
              state={{ image: galleryResult[0], title: `event` }}
            >
              <span style={{ cursor: `pointer` }}>
                {galleryResult.length > 0 &&
                  `Event's Photos (${galleryResult[0].length})`}
              </span>
            </Link>
            <span
              style={{ cursor: `pointer` }}
              className="material-icons-outlined"
              onClick={() => {
                setAddImage(!addImage);
                setValue('event')
              }}
            >
              add
            </span>
          </>
        )}
      </div>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: `pointer` }}
        className={classes.eventSec}
      >
        {loading && <span>{`(Loading Data)`}</span>}

        {error && <span>Failed to load data</span>}
        {!loading && !error && (
          <>
            <span>Resturant's Photos {`(4)`}</span>
            <span className="material-icons-outlined">
              {open ? `arrow_drop_up` : `arrow_drop_down`}
            </span>
          </>
        )}
      </div>
      {!loading &&
        !error &&
        open &&
        galleryResult.length > 0 &&
        Object.entries(galleryResult[1])?.map((title, index) => (
          <div className={classes.subSec} key={index}>
            <Link to="images" state={{ image: title[1], title: title[0] }}>
              <span style={{ cursor: `pointer`, textTransform: `capitalize` }}>
                {title[0]} Photos {"(" + title[1]?.length + ")"}
              </span>
            </Link>
            <span
              style={{ cursor: `pointer` }}
              className="material-icons-outlined"
            >
              add
            </span>
          </div>
        ))}
        {addImage && <AddImage value={value} setAddImage={setAddImage} />}
    </div>
  );
}
