import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  set,
} from "firebase/database";
import { useEffect, useState } from "react";
import classes from "../styles/AddImage.module.css";

export default function AddImage({ value, setAddImage, setValue, addImage }) {
  const [url, setUrl] = useState("");
  const [galVal, setGalVal] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function galleryVal() {
      setLoading(true);
      const db = getDatabase();
      const galleryRef = ref(
        db,
        `gallery/${value === "events" ? "events" : `resturant/${value}`}`
      );
      const galleryQuery = query(galleryRef, orderByKey());
      const snapShot = await get(galleryQuery);
      setGalVal(snapShot.val().length);
      setLoading(false);
    }

    galleryVal();
  }, [galVal, value]);

  const handleSubmit = async () => {
    const db = getDatabase();
    const imageRef = ref(
      db,
      `gallery/${value === "events" ? "events" : `resturant/${value}`}/${
        galVal ? galVal : 0
      }`
    );

    await set(imageRef, { url: url });

    setUrl("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.formField}>
        {loading && <span>Loading...</span>}
        {!loading && (
          <>
            <input
              className={classes.fileInput}
              type="text"
              value={url}
              placeholder="Give a url"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <div>
              <button
                onClick={() => {
                  setAddImage(!addImage);
                  setValue("");
                }}
                className={classes.addButton}
              >
                Cancel
              </button>
              <button onClick={handleSubmit} className={classes.addButton}>
                Add Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
