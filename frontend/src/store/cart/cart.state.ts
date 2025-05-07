import { createSlice } from '@reduxjs/toolkit'
import { REDUCERS } from '../../constants/store'
import type { CartState } from './types'
import { addToCart } from './cart.logic'

// Define a type for the slice state
const initialState: CartState = {
  data: null,
  isLoading: false,
  error: "",
}

export const slice = createSlice({
  name: REDUCERS.cart,
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
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.message || "An Error Occured"
    })
  }
})
export const cartReducer = slice.reducer
export const cartActions = slice.actions