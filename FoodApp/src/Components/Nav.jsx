import styles from "../Modules/nav.module.css";
import { useState } from "react"

export default function Nav()
{
    const [foodData, setFoodData]= useState([]);
    return(
        <div className={styles.nav} >
            FoodApp
           

        </div>
    );
}