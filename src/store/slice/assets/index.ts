import { createSlice } from "@reduxjs/toolkit";
import {
  getFavoriteAssets,
  getPricesAssets,
  getTopPriceCoins,
} from "../../thunks/assets";

const initialState: any = {
  assets: [],
  favoriteAssets: [],
  pricesAssets: [],
  topPricesCoins: [],
};

export const assetSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
      state.favoriteAssets.push(action.payload);
    });
    builder.addCase(getPricesAssets.fulfilled, (state, action) => {
      state.pricesAssets.push(action.payload);
    });
    builder.addCase(getTopPriceCoins.fulfilled, (state, action) => {
      state.topPricesCoins.push(action.payload);
    });
  },
});

export default assetSlice.reducer;
