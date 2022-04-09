import useGallery from "../hooks/useGallery";
import ImageGrid from "../ImageGrid";

export default function Gallery() {
  const { loading, error, galleryResult } = useGallery();

  return (
    <div>
      <div>
        <h1>Our Resturant</h1>
        <div className="image">
          {loading && <p>Loading...</p>}
          {error && <p>Something Went Wrong</p>}
          {!loading && !error && galleryResult.length > 0 && Object.values(galleryResult[2])?.map(
            (item, index) => (
              <ImageGrid images={item} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
