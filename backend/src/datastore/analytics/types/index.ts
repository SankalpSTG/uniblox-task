export type StoreMetricsType = {
  totalPurchaseAmount: number
  totalDiscountAmount: number
  purchaseCountPerProduct: Map<string, number>
  totalProductsPurchased: number
  usedCoupons: string[]
}