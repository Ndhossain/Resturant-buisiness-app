import { useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "../../styles/EventImage.module.css";
import AddImage from "../AddImage";
import AdminFullImage from "../AdminFullImage";

export default function EventsImages() {
  const [addImage, setAddImage] = useState(false);
  const [fullSize, setFullSize] = useState(false);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState();
  const location = useLocation();
  const { state } = location;
  const { image, title } = state;

  console.log(title)

  return (
    <div className={classes.container}>
      <h1
        style={{
          textTransform: `capitalize`,
          background: `rgba(255, 255, 255, 0.3)`,
          padding: `10px`,
          borderRadius: `5px`,
        }}
      >{`${title} Images:`}</h1>
      <div className={classes.imageDiv}>
        {image.map((img, index) => (
          <img
            className={classes.image}
            src={img.url}
            key={index}
            alt={title}
            onClick={() => {
              setFullSize(!fullSize);
              setIndex(index);
            }}
          />
        ))}
        <div
          className={classes.addMore}
          onClick={() => {
            setAddImage(!addImage);
            setValue(title);
          }}
        >
          <span
            style={{ fontSize: `40px` }}
            className="material-icons-outlined"
          >
            add
          </span>
        </div>
      </div>
      {addImage && (
        <AddImage setAddImage={setAddImage} value={value} setValue={setValue} addImage={addImage} />
      )}
      {fullSize && (
        <AdminFullImage
          image={image}
          index={index}
          setIndex={setIndex}
          setFullSize={setFullSize}
          fullSize={fullSize}
          title={title}
        />
      )}
    </div>
  );
}
