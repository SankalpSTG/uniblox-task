import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CouponType } from "./types";

@Injectable()
export class CouponsDataStore {
  private readonly coupons = new Map<string, CouponType>()
  private unusedCouponId:string | null
  
  getCoupon(): string{
    if(this.unusedCouponId){
      return this.unusedCouponId
    }else{
      const newCoupon:CouponType = {
        coupon: new Date().getTime().toString(36) + Math.round(Math.random() * 1000).toString(36),
        isValid: true
      }
      this.coupons.set(newCoupon.coupon, newCoupon)
      this.unusedCouponId = newCoupon.coupon
      return newCoupon.coupon
    }
  }
  canUseCoupon(couponId: string){
    const coupon = this.coupons.get(couponId)
    if(!coupon){
      return false
    }
    if(coupon.isValid === false){
      return false
    }
    return true
  }
  invalidateCoupon(couponId: string){
    const coupon = this.coupons.get(couponId)
    if(!coupon){
      throw new NotFoundException("Coupon Not Found")
    }
    if(coupon.isValid === false){
      throw new BadRequestException("Coupon is expired")
    }
    this.unusedCouponId = null
    coupon.isValid = false
    this.coupons.set(couponId, coupon)
  }
}