import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ErrorType } from "../types";
import type { GetProductsResponseType } from "./types";
import { REDUCERS } from "../../constants/store";
import API from "../../api";
import { API_ENDPOINTS } from "../../constants/api";

export const fetchProducts = createAsyncThunk<GetProductsResponseType, undefined, ErrorType>(`${REDUCERS.products}/fetch-products`, async (_, { rejectWithValue }) => {
  try {
    const response = await API.get({
      url: API_ENDPOINTS.fetchProducts
    });
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response);
  }
});
