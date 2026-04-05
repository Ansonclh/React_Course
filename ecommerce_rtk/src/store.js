import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
import avReducer from './avSlice';
import venueReducer from './venueSlice';

const store = configureStore({  //centralized store for application
  reducer: {
    cart: cartReducer,
    av: avReducer,
    venue: venueReducer,
  },
});

export default store;
