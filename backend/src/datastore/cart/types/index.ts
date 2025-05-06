export type AmountType = {
  amount: number,
  currency: string
}
export type CartItemType = {
  title: string,
  description: string,
  price: AmountType,
}
export type CartType = {
  cartId: string,
  items: CartItemType[]
}