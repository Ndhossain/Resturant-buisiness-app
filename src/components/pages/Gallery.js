import useGallery from "../hooks/useGallery";

export default function Gallery() {
  const { loading, error, galleryResult } = useGallery();


  return (
    <div>
      <div>
        <h1>Our Resturant</h1>
        <div></div>
      </div>
    </div>
  );
}
