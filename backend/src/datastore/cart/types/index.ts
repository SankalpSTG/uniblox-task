export type CartItemType = {
  productId: string
  quantity: number
  costPerItem: number,
}
export type CartType = {
  cartId: string,
  items: CartItemType[],
  isLocked: boolean
}