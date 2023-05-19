import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const initialState = {
    items: [],
    totalQuantity: 0,
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replacerCart(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find( x=> x.id === newItem.id);
            state.totalQuantity += 1;
            state.changed = true;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            
            const existingItem = state.items.find( x=> x.id === id);
            state.totalQuantity -= 1;
            state.changed = true;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
            }
            
        }
    }
});

export const cartActions = cartSlice.actions;

export const fetchCartData = () =>{
    
    return async (dispatch) => {

        const fetchData = async () =>{
            const response = await fetch('https://react-complete-guide-cac27-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Could not fetch cart data');
            }
            
            const data = await response.json();

            return data;
        }
        
        try{
            const cartData = await fetchData();
            dispatch(cartActions.replacerCart({
                items: cartData?.items || [],
                totalQuantity: cartData?.totalQuantity || 0
            }));
        }catch(error){
            dispatch(uiActions.showNotification({
              status: 'error',
              title: 'Error',
              message: error.message
            }));
        }
    }
}

export const sendCartData = (cart) =>{

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch('https://react-complete-guide-cac27-default-rtdb.firebaseio.com/cart.json',{
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity : cart.totalQuantity
                })
            });
    
            if(!response.ok){       
                throw new Error('Error sending cart');
            }
            
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent cart data successfully'
            }));
        }

        dispatch(
            uiActions.showNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending cart data'
          })
        );

        try{
            await sendRequest();
        }catch(error){
            dispatch(uiActions.showNotification({
              status: 'error',
              title: 'Error',
              message: error.message
            }));
        }

    }
}


export default cartSlice.reducer;

