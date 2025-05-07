export type OrderItemType = {
  productId: string,
  costPerItem: number,
  quantity: string
}
export type OrderType = {
  orderId: string,
  status: string,
  createdAt: string,
  finalAmount: string,
  discountCoupon: string,
  baseAmount: string,
  items: OrderItemType[],
}

export type CheckoutResponseType = OrderType
export type CheckoutRequestType = {
  cartId: string,
  discountCode?: string
}

export type CheckoutState = {
  data: OrderType | null,
  isLoading: boolean,
  error: string
}