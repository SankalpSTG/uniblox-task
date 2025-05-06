import { Injectable } from '@nestjs/common';
import { CartService } from '../cart/cart.service';
import { OrdersService } from './orders.service';
import { CheckoutDto } from './dto/checkout.dto';

@Injectable()
export class OrdersOrchestratedService {
  constructor(
    private readonly cartService: CartService,
    private readonly ordersService: OrdersService
  ){}
  checkout(data: CheckoutDto){
    const cart = this.cartService.getCart(data.cartId)
    return this.ordersService.createOrder(cart.items)
  }
}
