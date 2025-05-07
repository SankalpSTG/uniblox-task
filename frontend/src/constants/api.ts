const BASE_URL = import.meta.env.VITE_API_BASE_URL
export const API_ENDPOINTS = {
  addToCart: BASE_URL + "/cart/item",
  checkout: BASE_URL + "/orders/checkout",
  fetchCoupon: BASE_URL + "/admin/discount-coupon",
  fetchMetrics: BASE_URL + "/admin/metrics",
  fetchProducts: BASE_URL + "/products",
}