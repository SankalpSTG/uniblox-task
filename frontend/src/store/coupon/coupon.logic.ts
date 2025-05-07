import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ErrorType } from "../types";
import { REDUCERS } from "../../constants/store";
import API from "../../api";
import { API_ENDPOINTS } from "../../constants/api";
import type { GetCouponResponseType } from "./types";

export const fetchCoupon = createAsyncThunk<GetCouponResponseType, undefined, ErrorType>(`${REDUCERS.metrics}/fetch-coupon`, async (_, { rejectWithValue }) => {
  try {
    const response = await API.get({
      url: API_ENDPOINTS.fetchCoupon,
    });
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response);
  }
});

