import { createSlice } from "@reduxjs/toolkit";
import {
  getFavoriteAssetsOne,
  // getFavoriteAssetsTwo,
} from "../../thunks/assets";

const initialState: any = {
  assets: [],
  favoriteAssets: [],
};

export const assetSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAssetsOne.fulfilled, (state, action) => {
      state.favoriteAssets.push(action.payload);
    });
  },
});

export default assetSlice.reducer;
