import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderDetailsType, OrderType } from './types';

@Injectable()
export class OrdersDataStore {
  private readonly orders = new Map<string, OrderType>();

  createOrder(orderDetails: OrderDetailsType) {
    const order: OrderType = {
      ...orderDetails,
      orderId: new Date().getTime().toString(36) + Math.round(Math.random() * 1000).toString(36),
    };
    this.orders.set(order.orderId, order);
    return order;
  }

  getOrder(orderId: string) {
    const order = this.orders.get(orderId);
    if (!order) throw new NotFoundException('Order Not Found');
    return order;
  }
}
