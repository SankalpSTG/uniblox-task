import { configureStore } from "@reduxjs/toolkit";
import { metricsReducer } from "./metrics/metrics.state";
import { cartReducer } from "./cart/cart.state";
import { productsReducer } from "./products/products.state";
import { checkoutReducer } from "./checkout/checkout.state";
import { couponReducer } from "./coupon/coupon.state";

export const store = configureStore({
  reducer: {
    metrics: metricsReducer,
    cart: cartReducer,
    products: productsReducer,
    checkout: checkoutReducer,
    coupon: couponReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
