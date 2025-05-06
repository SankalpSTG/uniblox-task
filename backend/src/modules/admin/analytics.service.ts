import { AnalyticsDataStore } from '@/datastore/analytics/analytics.datastore';
import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { OrderType } from '@/datastore/orders/types';
import { Injectable } from '@nestjs/common';
import { GetMetricsResponseType } from './types';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly analyticsDataStore: AnalyticsDataStore
  ){}

  getMetrics(): GetMetricsResponseType{
    const metrics = this.analyticsDataStore.getAllMetrics()
    return {...metrics, purchaseCountPerProduct: Object.fromEntries(metrics.purchaseCountPerProduct.entries())}
  }
  getOrdersCount(){
    return this.analyticsDataStore.getOrdersCount()
  }
  updateMetrics(order: OrderType){
    this.analyticsDataStore.updateProductPurchaseCount(order.items)
    this.analyticsDataStore.updateTotalPurchaseAmount(order.finalAmount)
    this.analyticsDataStore.incrementOrderCount()
    if(order.discountCoupon){
      this.analyticsDataStore.updateTotalDiscount(order.baseAmount - order.finalAmount)
      this.analyticsDataStore.updateCouponUsage(order.discountCoupon)
    }
  }
}
