import { Injectable } from '@nestjs/common';
import { CartService } from '../cart/cart.service';
import { OrdersService } from './orders.service';
import { CheckoutDto } from './dto/checkout.dto';
import { AnalyticsService } from '../admin/analytics.service';
import { CouponsService } from '../admin/coupons.service';

@Injectable()
export class OrdersOrchestratedService {
  constructor(
    private readonly cartService: CartService,
    private readonly ordersService: OrdersService,
    private readonly analyticsService: AnalyticsService,
    private readonly couponsService: CouponsService
  ){}

  checkout(data: CheckoutDto){
    const cart = this.cartService.getCart(data.cartId)
    if(data.discountCode){
      this.couponsService.invalidateCoupon(data.discountCode)
    }
    const order = this.ordersService.createOrder(cart.items, data.discountCode)
    this.analyticsService.updateMetrics(order)
    return order
  }
}
