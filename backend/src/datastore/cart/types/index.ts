export type CartProductItem = {
  productId: string,
  title: string,
  description: string,
}
export type CartItemType = {
  product: CartProductItem
  quantity: number
  costPerItem: number,
}
export type CartType = {
  cartId: string,
  items: CartItemType[],
  isLocked: boolean
}