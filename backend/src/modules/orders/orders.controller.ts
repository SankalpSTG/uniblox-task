import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto';
import { OrdersOrchestratedService } from './orders-orchestrated.service';
import { Responses } from '@/misc/response';
import { OrderType } from '@/datastore/orders/types';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersOrchestratedService: OrdersOrchestratedService
  ){}
  @Post("/checkout")
  async checkout(@Body() data: CheckoutDto){
    return Responses.SuccessData<OrderType>(this.ordersOrchestratedService.checkout(data))
  }
}
