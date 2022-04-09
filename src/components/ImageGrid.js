export default function ImageGrid({ images = [], classes }) {
  return (
    <div className={classes.imageGrid}>
    {images?.map((image, index) => (
      <div className={classes.images}>
        <img key={image} src={image.url} alt="Gallery Images" />
      </div>
    ))}
  </div>
  );
}
