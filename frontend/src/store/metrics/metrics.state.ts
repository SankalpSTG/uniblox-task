import { createSlice } from '@reduxjs/toolkit'
import { REDUCERS } from '../../constants/store'
import type { MetricsState } from './types/metrics'
import { fetchMetrics } from './metrics.logic'

// Define a type for the slice state
const initialState: MetricsState = {
  data: null,
  isLoading: false,
  error: "",
}

export const slice = createSlice({
  name: REDUCERS.metrics,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    reset: (state) => {
      state.data= null
      state.isLoading = false
      state.error= ""
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchMetrics.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchMetrics.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchMetrics.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.message || "An Error Occured"
    })
  }
})
export const metricsReducer = slice.reducer
export const metricsActions = slice.actions