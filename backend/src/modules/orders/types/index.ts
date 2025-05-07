export type OrderProductItem = {
  productId: string,
  title: string,
  description: string,
}
export type OrderItemType = {
  product: OrderProductItem
  quantity: number
  costPerItem: number,
}