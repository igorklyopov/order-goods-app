import { createAsyncThunk } from '@reduxjs/toolkit';

import goodsAPI from '../../services/goodsAPI';

const getGoodsAllData = createAsyncThunk(
  'goods/getGoodsAllData',
  async (_, { rejectWithValue }) => {
    try {
      const goodsAllData = await goodsAPI.fetchGoodsAll();
      console.log(goodsAllData);
      return goodsAllData;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export { getGoodsAllData };
