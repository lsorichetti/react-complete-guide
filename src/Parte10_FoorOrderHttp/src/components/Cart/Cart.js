import { Fragment, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import useHTTP from '../../hooks/use-http';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoading, error, sendRequest] = useHTTP();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const submitOrderHandler = data => {

    const responseHandler = (data) => {
      cartCtx.clear();
      props.onClose();
    }

    const request = {
      url: 'https://react-complete-guide-ad65c-default-rtdb.firebaseio.com/orders.json',
      method: 'POST',
      body: JSON.stringify({
        user: data,
        orderedItems: cartCtx.items
      })
    }
    sendRequest(request, responseHandler);
  }

  return (
    <Modal onClose={props.onClose}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>Error: {error.message}</p>}
      {!isLoading && !error && 
      <Fragment>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}></Checkout>}
        {!isCheckout && 
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
              Close
            </button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
          </div>
        }
      </Fragment>
      }
      
      
    </Modal>
  );
};

export default Cart;
