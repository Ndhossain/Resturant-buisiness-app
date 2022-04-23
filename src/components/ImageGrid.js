import { useState } from "react";
import FullImage from "./FullImage";

export default function ImageGrid({ images = [], classes }) {
  const [indexNo, setIndexNo] = useState();
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      <div className={classes.imageGrid}>
        {images?.map((image, index) => (
          <div key={index} className={classes.images}>
            <img
              onClick={() => {
                setIndexNo(index);
                setFullScreen(true);
              }}
              src={image.url}
              alt="Gallery Images"
            />
          </div>
        ))}
      </div>
      {fullScreen && <FullImage images={images} indexNo={indexNo} />}
    </>
  );
}
