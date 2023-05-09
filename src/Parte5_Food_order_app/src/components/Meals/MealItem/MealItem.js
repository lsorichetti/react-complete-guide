import { useContext } from 'react';
import styles from './MealItem.module.css'

import MealItemForm from './MealItemForm';

import CartContext from '../../../store/cart-context';

const MealItem = props =>{

    const cartCtx = useContext(CartContext);
    const { meal } = props;

    const price = `$ ${meal.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            amount: amount,
            price: meal.price
        })
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <MealItemForm id={meal.id} onAddToCart={addToCartHandler}>
                
            </MealItemForm>
        </li>
    )
}

export default MealItem;