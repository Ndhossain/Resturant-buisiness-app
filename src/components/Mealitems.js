import axios from "axios";
import { useState, useEffect } from "react";
import classes from "../styles/Mealitem.module.css";



export default function Mealitems({mealValue, category}) {
    const [response, setResponse] = useState(null);
    
    const myArray = [];
    const getItems = async (cate) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`
        const response = await axios.get(url)
        return response.data
    }

    console.log(myArray);
    
    category.forEach(categories => {
        getItems(categories.strCategory).then((res) => {
            let newArray = myArray.concat(...res.meals)
            // setResponse(newArray);
        })
    });
    console.log(response);

    // useEffect(() => {
    //     setResponse(myArray)
    // },[myArray]
    // )

            

    return (
        <div className={classes.itemsSection}>
            <div>

                {/* {myarray.length < 0 && myarray.map((items) => (
                    items.map((item) => (
                        <div className={classes.products} key={item.idMeal}>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                            <span>Title: {item.strMeal}</span>
                            <span>calories</span>
                            <span>Details</span>
                        </div>
                    ))
                ))} */}
            
            </div>
        </div>
    )
}