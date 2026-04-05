import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
const store = configureStore({  //centralized store for application
  reducer: {
    cart: cartReducer,
  },
});

export default store;
