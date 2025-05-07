import { useEffect, type JSX } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMetrics } from "../store/metrics/metrics.logic";
import { fetchCoupon } from "../store/coupon/coupon.logic";

const AdminContainer = () => {
  const metricsState = useAppSelector((store) => store.metrics);
  const couponState = useAppSelector((store) => store.coupon);
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchMetrics())
  }, [])
  
  const onGenerateCouponClicked = () => {
    dispatch(fetchCoupon())
  }

  const getPurchaseCountPerProduct = () => {
    try{
      const entries: [string, string][] = Object.entries(metricsState.data?.purchaseCountPerProduct || {})
      if(entries.length == 0) return []
      const rows: JSX.Element[] = [<div className="flex items-center justify-between">
        <div className="font-bold">Product</div>
        <div className="font-bold">Quantity</div>
      </div>]
      for(let i = 0; i < entries.length; i++){
        rows.push(<div className="flex items-center justify-between">
          <div>{entries[i][0]}</div>
          <div>{entries[i][1]}</div>
        </div>)
      }
      return rows
    }catch(error){
      return []
    }
  }

  return (
    <div className="p-4 w-full h-full flex items-center justify-center">
      <div className="w-[480px] rounded-md p-4 max-w-full shadow-[0px_0px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-2">
        {metricsState.data ? (
          <div className="w-full">
            <div className="flex items-center justify-between py-2">
              <div className="text-2xl">Store Metrics</div>
            </div>
            <hr className="border-[#EFEFEF]"/>
            <div className="flex items-center justify-between py-2">
              <div>Products Purchased</div>
              <div>{metricsState.data.totalProductsPurchased}</div>
            </div>
            {getPurchaseCountPerProduct()}
            <hr className="border-[#EFEFEF]"/>
            <div className="flex items-center justify-between py-2">
              <div>Total Purchase Amount</div>
              <div>{metricsState.data.totalPurchaseAmount}</div>
            </div>
            <hr className="border-[#EFEFEF]"/>
            <div className="py-2">
              <div>Discount Coupons Used</div>
              <div>{metricsState.data.usedCoupons.length>0?metricsState.data.usedCoupons.join(", "):"none"}</div>
            </div>
            <hr className="border-[#EFEFEF]"/>
            <div className="flex items-center justify-between py-2">
              <div>Total Discount</div>
              <div>{metricsState.data.totalDiscountAmount}</div>
            </div>
          </div>
        ) : (
          <div className="w-full">Metrics currently unavailable</div>
        )}
        <hr className="w-full border-[#EFEFEF]"/>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <div onClick={() => onGenerateCouponClicked()} className="w-full p-2 bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-center">
            Click To Generate Coupon
          </div>
          <div className="w-full p-2 text-center border border-[#EFEFEF]">
            {couponState.data? couponState.data:"Coupon will appear here"}
          </div>
        </div>
        </div>
    </div>
  );
};

export default AdminContainer;
