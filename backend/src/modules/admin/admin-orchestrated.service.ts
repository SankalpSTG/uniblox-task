import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { Injectable } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CouponsService } from './coupons.service';

@Injectable()
export class AdminOrchestratedService {
  constructor(
    private readonly analyticsService: AnalyticsService,
    private readonly couponsService: CouponsService
  ){}
  getCoupon(){
    return this.couponsService.getCoupon()
  }
  getMetrics(){
    return this.analyticsService.getMetrics()
  }
}
