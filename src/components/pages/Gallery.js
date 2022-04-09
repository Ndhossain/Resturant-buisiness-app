import useGallery from "../hooks/useGallery";
import ImageGrid from "../ImageGrid";
import classes from "../../styles/Gallery.module.css"
import resClasses from "../../styles/ImageGrid.module.css"
import eventClasses from "../../styles/EventImg.module.css"

export default function Gallery() {
  const { loading, error, galleryResult } = useGallery();

  console.log(galleryResult)

  return (
    <div>
      <div>
        <h1 style={{textAlign: `center`,padding: `2em`}}>Our Resturant</h1>
        <div className={classes.image}>
          {loading && <p>Loading...</p>}
          {error && <p>Something Went Wrong</p>}
          {!loading && !error && galleryResult.length > 0 && Object.values(galleryResult[1])?.map(
            (item, index) => (
              <ImageGrid classes={resClasses} images={item} key={index} />
            )
          )}
        </div>
      </div>
      <div>
        <h1 style={{textAlign: `center`,padding: `2em`}}>Events</h1>
        <div className={classes.image}>
          {loading && <p>Loading...</p>}
          {error && <p>Something Went Wrong</p>}
          {!loading && !error && galleryResult?.length > 0 && (
              <ImageGrid classes={eventClasses} images={galleryResult[0]}/>
            )}
        </div>
      </div>
    </div>
  );
}
