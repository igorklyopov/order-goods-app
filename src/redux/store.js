import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from '../redux/goods/goodsSlice';

const store = configureStore({
  reducer: {
    pokemon: goodsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
