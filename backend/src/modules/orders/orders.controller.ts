import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto';

@Controller('orders')
export class OrdersController {
  @Post("/checkout")
  async checkout(@Body() data: CheckoutDto){
    
  }
}
