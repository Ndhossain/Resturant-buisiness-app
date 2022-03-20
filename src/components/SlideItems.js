export default function SlideItem({title, imageSource, styles}) {
    return (
        <div className={styles}>
              <img src={imageSource} alt={title} />
              <h4>{title}</h4>
            </div>
    )
}