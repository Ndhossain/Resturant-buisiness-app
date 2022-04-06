import classes from "../styles/Authorities.module.css"

export default function Authorities({loading, error, authors}) {
    return (
        <div className={classes.authoritiesSec}>
        <h1>Our Authorities</h1>
        <div className={classes.authorities}>
          {loading && <div>Loading...</div>}
          {error && <div>Something Went Wrong</div>}
          {!loading && !error && authors?.length > 0 && authors.map((items, index) => (
              <div className={classes.authoritiesDetails} key={index}>
              <img
                src={items.photo}
                alt="test"
              />
              <span>{items.name}</span>
              <span>{items.designation}</span>
            </div>
          ))}
        </div>
      </div>
      )
}