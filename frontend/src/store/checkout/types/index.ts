export type OrderProductType = {
  productId: string,
  description: string,
  title: string
}
export type OrderItemType = {
  product: OrderProductType,
  costPerItem: number,
  quantity: number
}
export type OrderType = {
  orderId: string,
  status: string,
  createdAt: string,
  finalAmount: number,
  discountCoupon: string | null,
  baseAmount: number,
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