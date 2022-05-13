import { useEffect, useState } from "react";
import classes from "../styles/AddImage.module.css";

export default function AddImage() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log(file);
    console.log(url);
  }, [file, url]);

  return (
    <div className={classes.container}>
      <div className={classes.formField}>
        <input
          type="file"
          className={classes.fileInput}
          name="image"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setUrl("");
          }}
        />
        <span>or</span>
        <input
          className={classes.fileInput}
          type="text"
          value={url}
          placeholder="Give a url"
          onChange={(e) => {
            setUrl(e.target.value);
            setFile(null);
          }}
        />
        <button>Add Image</button>
      </div>
    </div>
  );
}
