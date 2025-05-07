export type CartProductItemType = {
  productId: string
  title: string
  description: string
}
export type CartItemType = {
  product: CartProductItemType,
  costPerItem: number,
  quantity: number
}
export type CartType = {
  cartId: string,
  items: CartItemType[],
  isLocked: boolean
}

export type AddToCartResponseType = CartType
export type AddToCartRequestType = {
  cartId?: string,
  productId: string
}

export type CartState = {
  data: CartType | null,
  isLoading: boolean,
  error: string
}