import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from '../redux/goods/goodsSlice';

const store = configureStore({
  reducer: {
    goods: goodsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
