import { AmountType, CartItemType } from "src/datastore/cart/types"

export enum OrderStatusEnum {
  Processing = "processing",
  Completed = "completed"
}
export type OrderDetailsType = {
  items: CartItemType[]
  baseAmount: AmountType
  discountCoupons: string[],
  finalAmount: AmountType
  createdAt: Date
  status: OrderStatusEnum
}

export type OrderType = OrderDetailsType & {
  orderId: string
}