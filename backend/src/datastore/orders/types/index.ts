import { CartItemType } from "src/datastore/cart/types"

export enum OrderStatusEnum {
  Processing = "processing",
  Completed = "completed"
}
export type OrderDetailsType = {
  items: CartItemType[]
  baseAmount: number
  discountCoupons: string[],
  finalAmount: number
  createdAt: Date
  status: OrderStatusEnum
}

export type OrderType = OrderDetailsType & {
  orderId: string
}