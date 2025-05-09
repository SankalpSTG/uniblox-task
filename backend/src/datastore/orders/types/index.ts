import { CartItemType } from "src/datastore/cart/types"

export enum OrderStatusEnum {
  Processing = "processing",
}
export type OrderDetailsType = {
  items: CartItemType[]
  baseAmount: number
  discountCoupon: string | null,
  finalAmount: number
  createdAt: Date
  status: OrderStatusEnum
}

export type OrderType = OrderDetailsType & {
  orderId: string
}