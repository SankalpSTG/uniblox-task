import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto';
import { OrdersOrchestratedService } from './orders-orchestrated.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersOrchestratedService: OrdersOrchestratedService
  ){}
  @Post("/checkout")
  async checkout(@Body() data: CheckoutDto){
    console.log(data)
    return this.ordersOrchestratedService.checkout(data)
  }
}
