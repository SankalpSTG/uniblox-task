import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CouponsService } from './coupons.service';
import { ConfigService } from '@nestjs/config';
import { GetMetricsResponseType } from './types';

@Injectable()
export class AdminOrchestratedService {
  constructor(
    private readonly analyticsService: AnalyticsService,
    private readonly couponsService: CouponsService,
    private readonly configService: ConfigService
  ){}
  getCoupon(){
    let ordersCount = this.analyticsService.getOrdersCount()
    let numOrdersForCoupon = parseInt(this.configService.get("ORDER_COUNT_FOR_DISCOUNT") || "1")
    if((ordersCount + 1) % numOrdersForCoupon !== 0) throw new BadRequestException("Currently you are not eligible for a coupon. Please come back later")
    return this.couponsService.getCoupon()
  }
  getMetrics(): GetMetricsResponseType{
    return this.analyticsService.getMetrics()
  }
}
