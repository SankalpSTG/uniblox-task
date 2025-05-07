export type ProductType = {
  productId: string
  title: string
  description: string
  costPerItem: number
}

export type GetProductsResponseType = ProductType[]

export type ProductsState = {
  data: GetProductsResponseType,
  isLoading: boolean,
  error: string
}