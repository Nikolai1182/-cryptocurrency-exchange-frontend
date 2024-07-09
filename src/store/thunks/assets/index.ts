import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../../../utils/axios";

export const getFavoriteAssets = createAsyncThunk(
  "coins/markets",
  async (data: string, { rejectWithValue }) => {
    try {
      const assets = await coinGeckoApi.get(`/coins/${data}`);
      return { name: data, data: assets.data };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getPricesAssets = createAsyncThunk(
  "coins/market_chart",
  async (data: string, { rejectWithValue }) => {
    try {
      const assets = await coinGeckoApi.get(
        `/coins/${data}/market_chart?vs_currency=usd&days=90`
      );
      // console.log(assets.data);

      return assets.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getTopPriceCoins = createAsyncThunk(
  "coins/markets?vs_currency",
  async (_, { rejectWithValue }) => {
    try {
      const response = await coinGeckoApi.get(
        `/coins/markets?vs_currency=usd&per_page=100`
      );
      // console.log(response.data);

      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
