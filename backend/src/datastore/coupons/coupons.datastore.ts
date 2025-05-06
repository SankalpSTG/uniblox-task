import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CouponType } from "./types";

@Injectable()
export class CouponsDataStore {
  private readonly coupons = new Map<string, CouponType>()
  private readonly unusedCouponIds:Set<string> = new Set()
  
  getCoupon(): string{
    if(this.unusedCouponIds.size > 0){
      return this.unusedCouponIds.values().next().value
    }else{
      const newCoupon:CouponType = {
        coupon: new Date().getTime().toString(36) + Math.round(Math.random() * 1000).toString(36),
        isValid: true
      }
      this.coupons.set(newCoupon.coupon, newCoupon)
      this.unusedCouponIds.add(newCoupon.coupon)
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
    this.unusedCouponIds.delete(couponId)
    coupon.isValid = false
    this.coupons.set(couponId, coupon)
  }
}