export type CartItemType = {
  productId: string,
  costPerItem: number,
  quantity: string
}
export type CartType = {
  cartId: string,
  items: CartItemType[],
  isLocked: boolean
}

export type AddToCartResponseType = CartType
export type AddToCartRequestType = {
  cartId: string,
  productId: string
}

export type CartState = {
  data: CartType | null,
  isLoading: boolean,
  error: string
}