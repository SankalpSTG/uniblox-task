import { createSlice } from '@reduxjs/toolkit'
import { REDUCERS } from '../../constants/store'
import type { ProductsState } from './types'
import { fetchProducts } from './products.logic'

// Define a type for the slice state
const initialState: ProductsState = {
  data: [],
  isLoading: false,
  error: "",
}

export const slice = createSlice({
  name: REDUCERS.products,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    reset: (state) => {
      state.data= []
      state.isLoading = false
      state.error= ""
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.message || "An Error Occured"
    })
  }
})
export const productsReducer = slice.reducer
export const productsActions = slice.actions