import classes from "../styles/Mealitem.module.css"
import pizza from "../assets/pizza.jpg"
import useFetch from "./hooks/useFetch"

export default function Mealitems({mealValue, category}) {
    const allItems = useFetch(category.map((cate) => (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)), "GET")

    const alls = category.map((cate) => 
    (useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`), "GET"))

    console.log(allItems);

    console.log(mealValue);
    return (
        <div className={classes.itemsSection}>
            <div>
            <div className={classes.products}>
                <img src={pizza} alt="pizza" />
                <span>Pizza</span>
                <span>calories</span>
                <span>Details</span>
            </div>
            <div className={classes.products}>
                <img src={pizza} alt="pizza" />
                <span>Pizza</span>
                <span>calories</span>
                <span>Details</span>
            </div>
            <div className={classes.products}>
                <img src={pizza} alt="pizza" />
                <span>Pizza</span>
                <span>calories</span>
                <span>Details</span>
            </div>
            <div className={classes.products}>
                <img src={pizza} alt="pizza" />
                <span>Pizza</span>
                <span>calories</span>
                <span>Details</span>
            </div>
            <div className={classes.products}>
                <img src={pizza} alt="pizza" />
                <span>Pizza</span>
                <span>calories</span>
                <span>Details</span>
            </div>
            <div className={classes.products}>
                <img src={pizza} alt="pizza" />
                <span>Pizza</span>
                <span>calories</span>
                <span>Details</span>
            </div>
            <div className={classes.products}>
                <img src={pizza} alt="pizza" />
                <span>Pizza</span>
                <span>calories</span>
                <span>Details</span>
            </div>
            </div>
        </div>
    )
}