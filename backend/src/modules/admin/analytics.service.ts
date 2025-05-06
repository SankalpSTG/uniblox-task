import { AnalyticsDataStore } from '@/datastore/analytics/analytics.datastore';
import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { OrderType } from '@/datastore/orders/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly analyticsDataStore: AnalyticsDataStore
  ){}

  getMetrics(){
    return this.analyticsDataStore.getAllMetrics()
  }
  updateMetrics(order: OrderType){
    this.analyticsDataStore.updateProductPurchaseCount(order.items)
    this.analyticsDataStore.updateTotalPurchaseAmount(order.finalAmount)
    if(order.discountCoupon){
      this.analyticsDataStore.updateTotalDiscount(order.baseAmount - order.finalAmount)
      this.analyticsDataStore.updateCouponUsage(order.discountCoupon)
    }
  }
}
