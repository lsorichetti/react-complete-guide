import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";

import styles from './HeaderCartButton.module.css';

import CartContext from "../../store/cart-context";

const HeaderCartButton = props =>{

    const [btnIsHighglighted, setBtnIsHighglighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);

    const btnClasses = `${styles.button} ${btnIsHighglighted? styles.bump : ''}`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHighglighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighglighted(false);
        }, 300);

        return () =>{
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;