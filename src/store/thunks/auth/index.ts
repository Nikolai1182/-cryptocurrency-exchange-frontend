import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData, IRegisterData } from "../../../common/types/auth";
import { instance } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const response = await instance.post("auth/login", data);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("name", response.data.user.firstName);
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

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: IRegisterData, { rejectWithValue }) => {
    try {
      const response = await instance.post("auth/register", data);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("name", response.data.user.firstName);
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
