import { Body, Controller, Post } from '@nestjs/common';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { CartService } from './cart.service';
import { CartOrchestratedService } from './cart-orchestrated.service';

@Controller('cart')
export class CartController {
  constructor(
    private readonly cartOrchestratedService: CartOrchestratedService
  ){}
  @Post("/item")
  async AddItemToCart(@Body() item: AddToCartDto){
    this.cartOrchestratedService.addItemToCart(item)
  }
}
