import { useEffect, useState } from "react";
import styles from "../Modules/fooddetails.module.css";
import ItemList from "./itemList";

export default function FoodDetail({foodId}){
    const [food, setFood] = useState({});
    const [isLoading, setLoading] = useState(true);
    const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "1c111df7886c43e9b0425605f5e6c522";
   

    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(`${url}?apiKey=${API_KEY}`);
                const data = await res.json();
                console.log(data);
                setFood(data);
                setLoading(false);
                
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        }

        fetchFood();
    }, [foodId]);

    return (
        <div className={styles.recipeCard}>
             <h2 className={styles.recipeName}>{food.title}</h2>
            <img className={styles.recipeImage}src={food.image}  />
            <div className={styles.recipeDetails}>
                <span>
                    ⏰{food.readyInMinutes} Minutes
                </span>
                <span>
                    <strong>
                        👩‍👩‍👦‍👦Servers {food.servings}
                    </strong>
                </span>
                <span>
                    {food.vegan ? " 🐷Vegan" : ""} 
                </span>
                <span>
                    {food.vegetaian ? " 🥕Vegetarian" : "🍗Non Vegetarian"} 
                </span>
            
            <div>
                ${(food.pricePerServing/100).toFixed(2)}
                </div>
                </div>
                <div>
                    
                </div>
            <div>
                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading}/>
              
                <h2>Instructions</h2><ol>
                {isLoading? <p>Loading...</p>:(food.analyzedInstructions[0].steps.map((step)=> (<li className={styles.li} key={step.step}>{step.step}</li>)))}

                </ol>
           
            
            </div>
            </div>
        
    );
}
