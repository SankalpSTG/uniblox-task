import type { FC } from "react"
import type { ProductType } from "../../store/products/types"

export type ProductItemProps = {
  data: ProductType
  onAddClicked: () => void
}
const ProductItem:FC<ProductItemProps> = ({data, onAddClicked}) => {
  return <div className="">
    <div className="p-2 bg-white rounded-md shadow-[0px_0px_3px_rgba(0,0,0,0.1)] w-[300px] max-w-full">
      <div className="text-lg">{data.title}</div>
      <div className="text-sm">{data.description}</div>
      <div className="flex items-center justify-between py-2">
        <div className="text-xl">Rs. {data.costPerItem}</div>
        <div onClick={() => onAddClicked()} className="bg-yellow-500 rounded-md py-1 px-2 cursor-pointer">Add +</div>
      </div>
    </div>
  </div>
}

export default ProductItem