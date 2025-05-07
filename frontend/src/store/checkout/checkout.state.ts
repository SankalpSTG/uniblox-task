import { createSlice } from '@reduxjs/toolkit'
import { REDUCERS } from '../../constants/store'
import type { CheckoutState } from './types'
import { checkout } from './checkout.logic'

// Define a type for the slice state
const initialState: CheckoutState = {
  data: null,
  isLoading: false,
  error: "",
}

export const slice = createSlice({
  name: REDUCERS.checkout,
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
    builder.addCase(checkout.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(checkout.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(checkout.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.message || "An Error Occured"
    })
  }
})
export const checkoutReducer = slice.reducer
export const checkoutActions = slice.actions