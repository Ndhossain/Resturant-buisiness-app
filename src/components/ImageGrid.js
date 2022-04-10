export default function ImageGrid({ images = [], classes }) {
  return (
    <div className={classes.imageGrid}>
    {images?.map((image, index) => (
      <div key={index} className={classes.images}>
        <img src={image.url} alt="Gallery Images" />
      </div>
    ))}
  </div>
  );
}
