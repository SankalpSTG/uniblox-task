import { Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post("/checkout")
  async checkout(){
    
  }
}
