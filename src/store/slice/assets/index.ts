import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteAssets, getPricesAssets } from "../../thunks/assets";

const initialState: any = {
  assets: [],
  favoriteAssets: [],
  pricesAssets: [],
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
  },
});

export default assetSlice.reducer;
