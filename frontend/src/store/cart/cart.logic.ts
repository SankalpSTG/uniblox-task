import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AddToCartRequestType, AddToCartResponseType } from "./types";
import type { ErrorType } from "../types";
import { REDUCERS } from "../../constants/store";
import API from "../../api";
import { API_ENDPOINTS } from "../../constants/api";

export const addToCart = createAsyncThunk<AddToCartResponseType, AddToCartRequestType, ErrorType>(`${REDUCERS.cart}/add-to-cart`, async (data, { rejectWithValue }) => {
  try {
    const response = await API.post({
      url: API_ENDPOINTS.addToCart,
      body: data
    });
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response);
  }
});
