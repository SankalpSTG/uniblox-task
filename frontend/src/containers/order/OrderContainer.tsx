import { useNavigate } from "react-router"
import { useAppSelector } from "../../hooks"
import { useEffect } from "react"

const OrderContainer = () => {
  const checkoutState = useAppSelector((store) => store.checkout)
  const navigate = useNavigate()
  useEffect(() => {
    if(!checkoutState.data){
      navigate("/")
    }
  }, [checkoutState.data, navigate])
  return <div className="p-4 w-full h-full flex items-center justify-center">
  <div className="w-[480px] rounded-md p-4 max-w-full shadow-[0px_0px_3px_rgba(0,0,0,0.1)]">
    <div className="text-2xl">Order Details</div>
    <hr className="border-[#EFEFEF]" />
    {checkoutState.data && (
      <div>
        
        <div className="flex items-center justify-between py-2">
          <div>Order Date</div>
          <div>{checkoutState.data.createdAt.split("T")[0]}</div>
        </div>
        <div className="font-bold">
          Items
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2">Product</div>
          <div>Quantity</div>
          <div>Rate</div>
          <div className="text-right">Amount</div>
        </div>
        {checkoutState.data.items.map((item) => (
          <div className="grid grid-cols-5">
            <div className="col-span-2">{item.product.title}</div>
            <div>{item.quantity}</div>
            <div>{item.costPerItem}</div>
            <div className="text-right">{item.costPerItem * item.quantity}</div>
          </div>
        ))}
        <hr className="border-[#EFEFEF]" />
        <div className="flex items-center justify-between py-2">
          <div>Total</div>
          <div>Rs. {checkoutState.data.baseAmount}</div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div>Coupon Discount <br/>{checkoutState.data.discountCoupon || ""}</div>
          <div>Rs. {checkoutState.data.baseAmount - checkoutState.data.finalAmount}</div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div>Final Amount</div>
          <div>Rs. {checkoutState.data.finalAmount}</div>
        </div>
      </div>
    )}
  </div>
</div>
}

export default OrderContainer