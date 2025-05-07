import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ErrorType } from "../types";
import { REDUCERS } from "../../constants/store";
import API from "../../api";
import { API_ENDPOINTS } from "../../constants/api";
import type { GetMetricsResponseType } from "./types/metrics";

export const fetchMetrics = createAsyncThunk<GetMetricsResponseType, unknown, ErrorType>(`${REDUCERS.metrics}/fetch-metrics`, async (_, { rejectWithValue }) => {
  try {
    const response = await API.get({
      url: API_ENDPOINTS.fetchMetrics,
    });
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response);
  }
});

