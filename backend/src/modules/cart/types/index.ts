import { CartProductItem } from "@/datastore/cart/types"

export type AddItemToCartType = {
  product: CartProductItem,
  costPerItem: number
  cartId?: string
}