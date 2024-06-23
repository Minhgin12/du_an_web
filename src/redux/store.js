import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './slides/orderSlide'
export const store = configureStore({
  reducer: {
    //product: productRedducer,
    //user : userReducer,
    order: orderReducer
  },
})