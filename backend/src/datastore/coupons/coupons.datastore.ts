import { Injectable } from "@nestjs/common";
import { CouponType } from "./types";

@Injectable()
export class CouponsDataStore {
  private readonly coupons = new Map<string, CouponType>()
  private readonly unusedCouponIds:Set<string> = new Set()
  
  getUnusedCoupon(): string{
    if(this.unusedCouponIds.size > 0){
      return this.unusedCouponIds.values().next().value
    }else{
      const newCoupon:CouponType = {
        coupon: new Date().toISOString(),
        orderId: null
      }
      this.coupons.set(newCoupon.coupon, newCoupon)
      this.unusedCouponIds.add(newCoupon.coupon)
      return newCoupon.coupon
    }
  }

  useCoupon(couponId: string, orderId: string){
    const coupon = this.coupons.get(couponId)
    if(!coupon){
      return
    }
    if(coupon.orderId !== null){
      return
    }
    this.unusedCouponIds.delete(couponId)
    coupon.orderId = orderId
    this.coupons.set(couponId, coupon)
  }

  getUsedCouponCount(){
    return this.coupons.size - this.unusedCouponIds.size
  }
}