import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { CartOrchestratedService } from './cart-orchestrated.service';
import { Responses } from 'src/misc/response';

@Controller('cart')
export class CartController {
  constructor(
    private readonly cartOrchestratedService: CartOrchestratedService
  ){}
  @Post("/item")
  async AddItemToCart(@Body() item: AddToCartDto){
    return Responses.SuccessData({
      cartId: this.cartOrchestratedService.addItemToCart(item)
    })
  }
  @Get("/:id")
  async GetCart(@Param("id") cartId: string){
    return this.cartOrchestratedService.getCart(cartId)
  }
}
