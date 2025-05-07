import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchProducts } from "../../store/products/products.logic"
import ProductItem from "./ProductItem"
import { addToCart } from "../../store/cart/cart.logic"

const ProductsContainer = () => {
  const productsState = useAppSelector(state => state.products)
  const cartState = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  const addItemToCart = (productId: string) => {
    dispatch(addToCart({
      productId: productId,
      cartId: cartState.data?.cartId
    }))
  }
  return <div className="p-4 w-full flex flex-col items-center justify-start gap-2">
    <div className="text-xl w-full">Products</div>
    <hr className="border-[rgba(0,0,0,0.5)]"/>
    <div className="w-full flex flex-wrap gap-2">
      {productsState.data.map(product => <ProductItem onAddClicked={() => addItemToCart(product.productId)} data={product}/>)}
    </div>
  </div>
}

export default ProductsContainer