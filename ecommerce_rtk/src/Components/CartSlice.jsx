import { createSlice } from '@reduxjs/toolkit';

const initialState = {  //must appear before createSlice
        cartItems: [],
    };

const CartSlice = createSlice({
    name: 'cart',
    initialState,  //initial state defined below
    reducers: {  //list of reducer functions
        addItemToCart: (state, action) => {  //state is current state of slice (cart), action is the dispatched action with payload (payload is additional data)
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1});
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cartItems = [];
        },
        increaseItemQuantity: (state, action) => {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity: (state, action) => {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        }
    }
});



export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;
