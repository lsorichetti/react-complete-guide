
import { useContext } from 'react';

import styles from './Cart.module.css';

import Modal from '../UI/Modal';

import CartContext from '../../store/cart-context';

import CartItem from './CartItem';

const Cart = props =>{

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;

    const cartItems = [...cartCtx.items];

    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item,amount:1});
    };

    return (
        <Modal onClose={props.onClose}>
            <ul className={styles['cart-items']}>
                {cartItems.map( item => 
                    <CartItem onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                                onAdd={cartItemAddHandler.bind(null, item)} 
                        key={item.id} name={item.name} amount={item.amount} price={item.price}>
                    </CartItem>
                )}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;