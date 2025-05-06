import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CouponsService {
  constructor(
    private readonly couponsDataStore: CouponsDataStore
  ){}

  getCoupon(){
    return this.couponsDataStore.getCoupon()
  }
  canUseCoupon(couponId: string){
    this.couponsDataStore.canUseCoupon(couponId)
  }
  invalidateCoupon(couponId: string){
    this.couponsDataStore.invalidateCoupon(couponId)
  }
}
