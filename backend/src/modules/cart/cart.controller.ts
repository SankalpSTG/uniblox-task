import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { CartOrchestratedService } from './cart-orchestrated.service';
import { Responses } from 'src/misc/response';
import { CartType } from '@/datastore/cart/types';

@Controller('cart')
export class CartController {
  constructor(
    private readonly cartOrchestratedService: CartOrchestratedService
  ){}
  @Post("/item")
  async AddItemToCart(@Body() item: AddToCartDto){
    return Responses.SuccessData<CartType>(this.cartOrchestratedService.addItemToCart(item))
  }
  @Get("/:id")
  async GetCart(@Param("id") cartId: string){
    return Responses.SuccessData<CartType>(this.cartOrchestratedService.getCart(cartId))
  }
}
