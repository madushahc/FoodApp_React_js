import { useEffect, useState } from "react";
import styles from "../Modules/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "1c111df7886c43e9b0425605f5e6c522";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchFood();
  }, [query, setFoodData]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
