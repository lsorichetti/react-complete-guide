import { Fragment, useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCartData, sendCartData } from './store/cart-slice';

import './index.css';

function App() {

  const dispatch = useDispatch();
  const cartIsVisible = useSelector( state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const [isInitial, setIsInitial] = useState(false);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch]);

  useEffect(()=>{
    
    if (!isInitial){
      setIsInitial(true);
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }


  },[cart, dispatch]);
  
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>};      
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
      
    </Fragment>
  );
}

export default App;
