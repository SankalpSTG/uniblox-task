import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  constructor(
    private readonly couponsDataStore: CouponsDataStore
  ){}

  getCoupon(){
    return this.couponsDataStore.getCoupon()
  }
}
