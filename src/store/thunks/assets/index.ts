import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cryptoRankInstance } from "../../../utils/axios";
const API_KEY = process.env.REACT_APP_CRYPTO_KEY;

export const getFavoriteAssetsOne = createAsyncThunk(
  "api/ticker1",
  async (data: unknown, { rejectWithValue }) => {
    try {
      const assets = await cryptoRankInstance.get(`/currencies/${data}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return assets.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response);
      } else {
        console.error("Error message:", error.message);
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
