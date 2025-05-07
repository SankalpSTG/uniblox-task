import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ErrorType } from "../types";
import { REDUCERS } from "../../constants/store";
import API from "../../api";
import { API_ENDPOINTS } from "../../constants/api";
import type { CheckoutRequestType, CheckoutResponseType } from "./types";

export const checkout = createAsyncThunk<CheckoutResponseType, CheckoutRequestType, ErrorType>(`${REDUCERS.checkout}/checkout`, async (data, { rejectWithValue }) => {
  try {
    const response = await API.post({
      url: API_ENDPOINTS.checkout,
      body: data
    });
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response);
  }
});
