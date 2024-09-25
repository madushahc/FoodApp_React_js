import { useEffect, useState } from "react";

export default function FoodDetail({foodId}){
    const [food, setFood] = useState({});
    const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "1c111df7886c43e9b0425605f5e6c522";

    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(`${url}?apiKey=${API_KEY}`);
                const data = await res.json();
                console.log(data);
                setFood(data);
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        }

        fetchFood();
    }, [foodId]);

    return (
        <div>
            <h2>Food Details {foodId}</h2>
            <p>{food.title}</p>
            {food.image && <img src={food.image} alt={food.title} />}
        </div>
    );
}
