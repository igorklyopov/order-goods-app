import { createSlice } from '@reduxjs/toolkit';
import { getGoodsAllData } from '../goods/goodsOperations';

const initialState = {
  goodsAll: [],
  goodsAllLoading: false,
  goodsAllError: null,
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  extraReducers: {
    [getGoodsAllData.pending](state) {
      state.goodsAllLoading = true;
      state.goodsAllError = null;
    },
    [getGoodsAllData.fulfilled](state, action) {
      state.goodsAll = action.payload;
      state.goodsAllLoading = false;
      state.goodsAllError = null;
    },
    [getGoodsAllData.rejected](state, action) {
      state.goodsAllLoading = false;
      state.goodsAllError = action.payload;
    },
  },
});

export default goodsSlice.reducer;
