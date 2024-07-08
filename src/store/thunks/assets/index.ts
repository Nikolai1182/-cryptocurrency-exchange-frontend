import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { coinGeckoApi } from "../../../utils/axios";
const API_KEY = process.env.REACT_APP_CRYPTO_KEY;

export const getFavoriteAssets = createAsyncThunk(
  "coins/markets",
  async (data: string, { rejectWithValue }) => {
    try {
      const assets = await coinGeckoApi.get(`/coins/${data}`);
      return { name: data, data: assets.data };
      // const singleAsset = await coinGeckoApi.get(
      //   `coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      //   {
      //     params: {
      //       api_key: API_KEY,
      //     },
      //   }
      // );
      // return {
      //   name: data,
      //   price_chart_data: assets.data.prices.slice(
      //     assets.data.prices.length - 60,
      //     assets.data.prices.length - 1
      //   ),
      //   singleAsset: singleAsset.data,
      // };
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
// market_chart
