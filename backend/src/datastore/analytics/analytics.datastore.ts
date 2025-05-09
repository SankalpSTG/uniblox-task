import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { StoreMetricsType } from "./types";
import { CartItemType } from "../cart/types";

@Injectable()
export class AnalyticsDataStore {
  private readonly storeMetrics: StoreMetricsType = {
      numberOfOrders: 0,
      totalPurchaseAmount: 0,
      purchaseCountPerProduct: new Map(),
      totalProductsPurchased: 0,
      usedCoupons: [],
      totalDiscountAmount: 0
  }
  getAllMetrics(){
    return this.storeMetrics
  }
  getOrdersCount(){
    return this.storeMetrics.numberOfOrders
  }
  updateCouponUsage(couponId: string){
    this.storeMetrics.usedCoupons.push(couponId)
  }
  updateProductPurchaseCount(products: CartItemType[]){
    for(let i = 0; i < products.length; i++){
      this.storeMetrics.totalProductsPurchased += products[i].quantity
      if(this.storeMetrics.purchaseCountPerProduct.has(products[i].product.productId)){
        this.storeMetrics.purchaseCountPerProduct.set(
          products[i].product.productId,
          this.storeMetrics.purchaseCountPerProduct.get(products[i].product.productId)! + products[i].quantity
        )
      }else{
        this.storeMetrics.purchaseCountPerProduct.set(products[i].product.productId, products[i].quantity)
      }
    }
  }
  updateTotalPurchaseAmount(amount: number){
    this.storeMetrics.totalPurchaseAmount += amount
  }
  updateTotalDiscount(amount: number){
    this.storeMetrics.totalDiscountAmount += amount
  }
  incrementOrderCount(){
    this.storeMetrics.numberOfOrders += 1
  }
}