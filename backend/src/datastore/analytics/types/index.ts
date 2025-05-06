export type StoreMetricsType = {
  numberOfOrders: number
  totalPurchaseAmount: number
  totalDiscountAmount: number
  purchaseCountPerProduct: Map<string, number>
  totalProductsPurchased: number
  usedCoupons: string[]
}