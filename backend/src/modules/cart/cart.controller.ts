import { Controller, Post } from '@nestjs/common';

@Controller('cart')
export class CartController {
  @Post("/item")
  async AddItemToCart(){

  }
}
