import { Injectable } from '@nestjs/common';
import { OrderItemType } from './types';
import { OrdersDataStore } from '@/datastore/orders/orders.datastore';
import { OrderStatusEnum } from '@/datastore/orders/types';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersDataStore: OrdersDataStore
  ){}
  createOrder(items: OrderItemType[], discountCode?: string){
    let totalAmount = 0
    for(let i = 0; i < items.length; i++){
      totalAmount += items[i].costPerItem * items[i].quantity
    }
    const order = this.ordersDataStore.createOrder({
      items: items,
      baseAmount: totalAmount,
      discountCoupon: discountCode || null,
      finalAmount: discountCode? Math.ceil(totalAmount * 0.9): totalAmount,
      createdAt: new Date(),
      status: OrderStatusEnum.Processing
    })
    return order
  }
}
