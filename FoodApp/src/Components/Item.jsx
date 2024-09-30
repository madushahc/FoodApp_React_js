import styles from "../Modules/item.module.css";

export default function Item({item}){
    return(
        <div className={styles.itemContainer}>
            <div key={item.id} className={styles.itemInmage}>
             <img className={styles.image}
                      src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image} />
                      <div className={styles.car}>
                    <div  className={styles.itemName}>{item.name}</div>
                    <div className={styles.itemAmount}>{item.amount} {item.unit}</div>
                    </div>
                             
                    
                  </div>
        </div>
    );
}