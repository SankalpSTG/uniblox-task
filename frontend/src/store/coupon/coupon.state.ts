import { createSlice } from '@reduxjs/toolkit'
import { REDUCERS } from '../../constants/store'
import type { CouponState } from './types'
import { fetchCoupon } from './coupon.logic'

// Define a type for the slice state
const initialState: CouponState = {
  data: null,
  isLoading: false,
  error: "",
}

export const slice = createSlice({
  name: REDUCERS.coupon,
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
    builder.addCase(fetchCoupon.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCoupon.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchCoupon.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.message || "An Error Occured"
    })
  }
})
export const couponReducer = slice.reducer
export const couponActions = slice.actions