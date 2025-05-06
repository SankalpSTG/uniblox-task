export type PurchaseCountPerProductType = {
  [key: string]: number
}
export type GetMetricsResponseType = {
  numberOfOrders: number
  totalPurchaseAmount: number
  totalDiscountAmount: number
  purchaseCountPerProduct: PurchaseCountPerProductType
  totalProductsPurchased: number
  usedCoupons: string[]
}