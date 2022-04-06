import classes from "../styles/Chef.module.css";

export default function Chef({ loading, error, chef }) {

  return (
    <div className={classes.chefSec}>
      <h1>Our Chef</h1>
      <div className={classes.chefs}>
        {loading && <div>Loading...</div>}
        {error && <div>Something Went Wrong</div>}
        {!loading && !error && chef?.length > 0 && chef.map((items, index) => (
            <div className={classes.chefDetails} key={index}>
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
  );
}
