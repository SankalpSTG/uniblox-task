import { Injectable, NotFoundException } from "@nestjs/common";
import { OrderDetailsType, OrderType } from "./types";

@Injectable()
export class OrdersDataStore {
  private readonly orders = new Map<string, OrderType>()
  
  createOrder(orderDetails: OrderDetailsType){
    const order: OrderType = {
      ...orderDetails,
      orderId: "",
    }
    this.orders.set(order.orderId, order)
    return order.orderId
  }
}